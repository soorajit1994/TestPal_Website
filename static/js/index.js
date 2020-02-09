

  
  

function runScript(e) {
    
   
    if (e.target.value.trim().includes("click")){  
        items=click_objects;
        console.log("q",items)
 
     }
     if (e.target.value.trim().includes("enter")){  
        items=enter_objects;
        console.log("q",items)
 
     }
      
    if (e.keyCode == 13&& e.shiftKey && e.target.value.trim()!=="") {
      
        $('#myTable').append('<tr><td><input class="inputs" id="'+String(parseInt(e.target.id) +1)+'" onkeydown="runScript(event)"/></td><td style="display:none" id="spin'+String(parseInt(e.target.id) +1)+'"><div class="spinner-grow text-info"></div></td></tr>');
        RunStep(e.target.value.trim(),String(e.target.id));
        document.getElementById(String(parseInt(e.target.id) +1)).focus();
        items = [ 'click', 'enter', 'navigate', 'select' ];
    }
  if (e.keyCode == 8) {
    if(e.target.value.trim()===""){
        
        
       if(e.target.id!=="1"){
       $(e.target.parentNode.parentNode).remove();
      
       document.getElementById(String(parseInt(e.target.id) -1)).focus();
    }
    }
    
}
$( ".inputs" )
.autocomplete({
  minLength: 0,
  source: function( request, response ) {
     
    response( $.ui.autocomplete.filter(
      items, extractLast( request.term ) ) );
  },
  focus: function() {
    return false;
  },
  select: function( event, ui ) {
    var terms = split( this.value );
    // remove the current input
    terms.pop();
    // add the selected item
    var selection='';
    
    switch(ui.item.value) {
        case "navigate":
         selection='navigate to url "<https://>"';
          break;
        case "click":
            selection =ui.item.value+" on";
            break;
         case "enter":
                selection =ui.item.value+' "<input>"';
           

                 break;
        

        default:
          selection =ui.item.value;
          
      }
    terms.push( selection );
    // add placeholder to get the comma-and-space at the end
    terms.push( "" );
    this.value = terms.join( " " );
    return false;
  },
  
});
if (e.target.value.trim().split(" ").length>=2&& !(e.target.value.trim().split(" ").some(r=> items.indexOf(r) >= 0))){
    
   
    
    $( ".inputs" ).autocomplete( "option", "disabled", false );
}
else{
    $( ".inputs" ).autocomplete( "option", "disabled", true );
}

}
var items = [ 'click', 'enter', 'navigate', 'select' ];
var click_objects=[];
var enter_objects=[];
  
  // 'one bottle of beer'
  ////$( ".inputs" ).autocomplete( "option", "disabled", true );


  function split( val ) {
       
    return val.split( / \s*/ );
  }
  function extractLast( term ) {
      
    return split( term ).pop();
  }