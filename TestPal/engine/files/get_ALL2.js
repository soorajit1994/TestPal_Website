var freq_dict={};
var inde=0;

function check_div(e){
    if(e.tagName==='DIV'){
            var TEXT=[].reduce.call(e.childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '');
              }
              if(e.tagName==='IMG'||e.tagName==="I"||e.tagName==="ICON"){
                  var TEXT="IMG"



              }
              if(e.tagName==='INPUT'||e.tagName==="TEXTAREA"||e.tagName==="SVG"||e.tagName==="IFRAME"||e.tagName==="CANVAS"||e.tagName==="SELECT"){

                var TEXT="INPUT"


              }
              else{
                var TEXT=[].reduce.call(e.childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '');
              }
    return TEXT;
    
    }
    function TagGen(e){


        if(e.getAttribute("type")==="checkbox"){

            return "CHECKBOX"


        }
        if(e.getAttribute("type")==="radio"){
            return "RADIO"


        }
        if(e.getAttribute("type")==="submit"){
            return "BUTTON"


        }
        if(e.getAttribute("type")==="button"){
            return "BUTTON"


        }
        else{
            return e.tagName.toUpperCase();
        }

        

    }
    function ObjectGen(e){
       var s=e.textContent.trim()
       if(s===""){
            if(e.getAttribute('value')){
            return e.getAttribute('value');
            }
            if(e.getAttribute('aria-label')){
                return e.getAttribute('aria-label');
                }
                if(e.getAttribute('placeholder')){
                    return e.getAttribute('placeholder');
                    }
            
            if(e.getAttribute('title')){
                return e.getAttribute('title');
            }
            if(e.getAttribute("name")){
                return e.getAttribute("name");
            }
            if(e.id!==""){
                return e.id
            }
            
            
            if(e.className!==""){
                return e.className;
            }
            if(e.getAttribute("type")){
                return e.getAttribute("type");
            }

       }
       else{
        var punctuationless = s.replace(/[.,\/#!$%\^&\*;:<>{}=\-_`~()]/g,"");
        var finalString = punctuationless.replace(/\s{2,}/g," ");
        var finalString=finalString.replace(/ /g,'').substring(0,15);
       /// console.log("Final String",finalString)
        return finalString.trim();}


    }
    function isHidden(el) {
        return (el.offsetParent === null)
    }

    function getPathToFailed(element) {
       
        
        if(element.id!==""){
            return "//*[@id='"+element.id+"']"
        }
        if (element===document.body){
        
            return element.tagName.toLowerCase();
        }
        


        
        
    
        var ix= 0;
        var siblings= element.parentNode.childNodes;
        for (var i= 0; i<siblings.length; i++) {
            var sibling= siblings[i];
            
            if (sibling===element){
            
            if(getPathToFailed(element.parentNode)==='body'){
                return 'html/'+getPathToFailed(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
            }
            else{
            return getPathToFailed(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
    
            }
    
            }
            
            if (sibling.nodeType===1 && sibling.tagName === element.tagName) {
                ix++;
            }
        }
    }
    function getPathTo(element) {
       
        
        
        if (element===document.body){
        
            return element.tagName.toLowerCase();
        }
        else{

            for(a=0;a<attribute_list.length;a++){
                if(element.getAttribute(attribute_list[a])){
                    

                   

                        return "//*[@"+attribute_list[a]+"='"+element.getAttribute(attribute_list[a])+"']"
                    

                    
                }


            }
            
        }
    
        var ix= 0;
        var siblings= element.parentNode.childNodes;
        for (var i= 0; i<siblings.length; i++) {
            var sibling= siblings[i];
            
            if (sibling===element){
            
            if(getPathTo(element.parentNode)==='body'){
                return 'html/'+getPathTo(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
            }
            else{
            return getPathTo(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
    
            }
    
            }
            
            if (sibling.nodeType===1 && sibling.tagName === element.tagName) {
                ix++;
            }
        }
    }
    
    function getPageXY(element) {
        var x= 0, y= 0;
        while (element) {
            x+= element.offsetLeft;
            y+= element.offsetTop;
            element= element.offsetParent;
        }
        return [x, y];
    }
    function getElementsByXPath(xpath, parent)
    {
        let results = [];
        let query = document.evaluate(xpath, parent || document,
            null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let i = 0, length = query.snapshotLength; i < length; ++i) {
            results.push(query.snapshotItem(i));
        }
        return results;
    }
    ///FOR COLLECTION TAGS AND ATTRIBUTES  ///  
   var attributes=[];
   var tags=[];
   
   var rejected_tags=['SCRIPT','STYLE','NOSCRIPT','NOFRAME','TRACK','VIDEO','FONT','EVENTSOURCE','RECT','PATH','path','circle'];
   var rejected_attributes=['style','align','allow','autocapitalize','autocomplete','autofocus','autoplay','bgcolor','border','buffered','charset','checked','color','cols','colspan','contenteditable','controls','crossorigin','decoding','disabled','download','draggable'
,'hidden','spellcheck','tabindex','translate','height','maxlength','max','min','sandbox','rowspan','width','size','aria-haspopup','aria-expanded','aria-labelledby','aria-label','datetime','aria-hidden','focusable','id','class','d'];
var rejected_event_attributes=arguments[0];

var elements=document.body.getElementsByTagName("*");
    for(e=0;e<elements.length;e++){
            var el=elements[e];
        for (var i = 0, atts = el.attributes, n = atts.length, arr = []; i < n; i++){
            if(!rejected_attributes.includes(atts[i].nodeName)&&!rejected_event_attributes.includes(atts[i].nodeName) &&!/^\d+$/.test(atts[i].nodeValue)&&atts[i].nodeValue!=='true'&&atts[i].nodeValue!=='false'&&atts[i].nodeValue.toLowerCase!=='both'&&!attributes.includes(atts[i].nodeName)&&atts[i].nodeValue.length<60&&atts[i].nodeValue.trim()!==""){
            attributes.push(atts[i].nodeName);
            }
         }
        var tag=el.tagName;
        if(!rejected_tags.includes(tag)&&!tags.includes(tag)){
                tags.push(tag);
            }

      }
    attributes.unshift("id", "class");
    console.log(attributes,tags);

////******************************/
    var results='False';
    var ALL=[];
    var XPATHS=[];
    var INSERTED_ELEMENTS=[];
    X=''
    var guessable_elements = tags;
    var attribute_list = attributes;
    var elements=document.body.getElementsByTagName("*");
  
        
        
        
        for (e=0;e<elements.length;e++){
            try{
            if(guessable_elements.includes(elements[e].tagName)&&!elements[e].hasAttribute("type")||(elements[e].hasAttribute("type")&&elements[e].type!=="hidden"&&elements[e].type!=="HIDDEN")&&elements[e]!==null){
            for (attr=0;attr<attribute_list.length;attr++){
                ///console.log("ATTR",attribute_list[attr],elements[e].hasAttribute(attribute_list[attr]))
                if(elements[e].hasAttribute(attribute_list[attr])){
    
    
    
                ///console.log(attribute_list[attr])
                var X=guess_xpath(elements[e].tagName,attribute_list[attr],elements[e])
                ///console.log(X);
                var locator=getElementsByXPath(X);
                if (locator.length===1){
                ///console.log(locator[0].tagName)
                
               var TEXT=check_div(elements[e]);
                
                if(TEXT.trim()!==""&&!isHidden(locator[0])){
                var results='True';
                break;
                }
                }
                ///console.log( getElementsByXPath(X) );
    
                }
    
                }
    
    
            if (results=='True'&&X!==''){
                
                if(!INSERTED_ELEMENTS.includes(elements[e])){
                INSERTED_ELEMENTS.push(elements[e]);
                var Obj=elements[e].tagName.toLowerCase()+"_"+ObjectGen(elements[e])
                

                var TAG=TagGen(elements[e])
                var Z={"XPATH":X,"TEXT":elements[e].textContent.trim(),"OBJ":Obj,"TAG":TAG}
               
            ALL.push(Z);
            X=''
            results='False'}
            
    
    
            }
            else{
            ///console.log(elements[e]);
            var TEXT=check_div(elements[e]);
            if(TEXT.trim()!==""&&!isHidden(elements[e])){
            
            X=getPathTo(elements[e])
           
            if(!X.endsWith("']")&&!X.startsWith("html")){
                var PARENT=X.split("']")[0]+"']"    
                
                var TAIL=X.split("/").slice(-1)[0].split("[")[0] ;
                var PARENT_TAIL=PARENT+"//"+TAIL;
                var locator=getElementsByXPath(PARENT_TAIL);
    
                if(locator.length===1){
              
                X=PARENT_TAIL;
              
                var Obj=elements[e].tagName.toLowerCase()+"_"+ObjectGen(elements[e])
                var TAG=TagGen(elements[e])
                var Z={"XPATH":X,"TEXT":elements[e].textContent.trim(),"OBJ":Obj,"TAG":TAG}
                if(!INSERTED_ELEMENTS.includes(elements[e])){
                ALL.push(Z);
                INSERTED_ELEMENTS.push(elements[e])
                X=''
                results='False'}
                }
                else{
                    if( PARENT_TAIL in freq_dict){
                        inde=freq_dict[PARENT_TAIL]
                        freq_dict[PARENT_TAIL]=inde+1;
                        X="("+PARENT_TAIL+")["+String(inde)+"]";
                    }
                    else{

                        freq_dict[PARENT_TAIL]=1;
                        X="("+PARENT_TAIL+")["+String(1)+"]";
                    }
                        
                        ///console.log("PARENT TAIL",X)
                        
                        var Obj=elements[e].tagName.toLowerCase()+"_"+ObjectGen(elements[e])
                        var TAG=TagGen(elements[e])
                         var Z={"XPATH":X,"TEXT":elements[e].textContent.trim(),"OBJ":Obj,"TAG":TAG}
                         if(!INSERTED_ELEMENTS.includes(elements[e])){
                        ALL.push(Z);
                        
                        INSERTED_ELEMENTS.push(elements[e])
                        X=''
                        results='False'}
                   




                }
            
            















































            
            }
            else{
                PX=getPathToFailed(elements[e])
                if(PX.startsWith("html")){
                    
                    var X=PX;
                   
                    var Obj=elements[e].tagName.toLowerCase()+"_"+ObjectGen(elements[e])
                    
                    var TAG=TagGen(elements[e])
                    
                    var Z={"XPATH":X,"TEXT":elements[e].textContent.trim(),"OBJ":Obj,"TAG":TAG}

                    if(!INSERTED_ELEMENTS.includes(elements[e])){
                    ALL.push(Z);
                    INSERTED_ELEMENTS.push(elements[e])
                    X=''
                    results='False'}


                }

                else{
                    
                    var PARENT_ABS=PX.split("']")[0]+"']"
                    var PARENT_ABSO=X.split("']")[0]+"']"
                    var MERGED=PARENT_ABS+PARENT_ABSO
                    /////console.log("PFailed Initiallly",MERGED)
                    locator=getElementsByXPath(MERGED);
                    
                    if(locator.length===1)    {
                        
                        X="("+MERGED+")["+String(1)+"]";
                        var Obj=locator[0].tagName.toLowerCase()+"_"+ObjectGen(locator[0])
                        var TAG=TagGen(locator[0])
                         var Z={"XPATH":X,"TEXT":locator[0].textContent.trim(),"OBJ":Obj,"TAG":TAG}
                         if(!INSERTED_ELEMENTS.includes(locator[0])){
                        ALL.push(Z);
                        INSERTED_ELEMENTS.push(locator[0])
                        X=''
                        results='False'}
                    }
                    else{
                        if( MERGED in freq_dict){
                             inde=freq_dict[MERGED]
                             freq_dict[MERGED]=inde+1;
                             X="("+MERGED+")["+String(inde+1)+"]";
                        }
                        else{
                            freq_dict[MERGED]=1;
                            X="("+MERGED+")["+String(1)+"]";
                        }
                        var Obj=elements[e].tagName.toLowerCase()+"_"+ObjectGen(elements[e])
                        var TAG=TagGen(elements[e])
                        
                       /// console.log("PARENT TAIL",X)
                         var Z={"XPATH":X,"TEXT":elements[e].textContent.trim(),"OBJ":Obj,"TAG":TAG}
                         if(!INSERTED_ELEMENTS.includes(elements[e])){
                        ALL.push(Z);
                        INSERTED_ELEMENTS.push(elements[e])
                        X=''
                        results='False'}
                        
                    }
                        
                        
                    
                }


                   
                   
                    

            }
            //*********************************************************** */
        }
    
    
            }
    
            }}
            catch(err){
                console.log("Q-MatePro Says: ",err,elements[e],freq_dict)
            }
            
    
    
        }
        
       
    function guess_xpath(tag,attr,element){
    
    
    
    var attr2=element.getAttribute(attr)
   
    
    
    
    
    if(String(attr2).length>25){
        
        var XPATH="//"+tag.toLowerCase()+"[contains(@"+attr+",'"+attr2.substring(0,25)+"')]"

    }
    else{
    var XPATH='//'+tag.toLowerCase()+"[@"+attr+"='"+attr2+"']"
    }
    return XPATH;
    }
   
    console.log(ALL);
    
    return ALL;

    