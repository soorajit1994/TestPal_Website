

function RunStep(step,id){
    console.log(id);
    $('#err'+id).replaceWith('<td style="display:none" id="spin'+id+'"><div class="spinner-grow text-info"></div></td>') 
    $('#spin'+id).show();
$.ajax({
    type: 'GET',
    url: '/RunStep/',
    data: {
      'step': step
    },
    dataType: 'json',
    
    success: function (data) {
      console.log(data);
      click_objects=[];
      enter_objects=[];
      
      $('#spin'+id).hide();
      if(data.status==="fail"){
      $('#spin'+id).replaceWith( '<td id="err'+id+'"> <i class="fa fa-warning" style="font-size:28px;color:red"></i></td>')
      }
      else{
        for(o=0;o<data.objects.length;o++){

            if(data.objects[o]["TAG"]=="A"||data.objects[0]["TAG"]==="BUTTON"||data.objects[o]["TAG"]=="SPAN"){

                data.objects[o]["TEXT"].trim()!==""?click_objects.push(data.objects[o]["TEXT"]):click_objects.push(data.objects[o]["OBJ"]);
            }
            if(data.objects[o]["TAG"]=="INPUT"||data.objects[0]["TAG"]==="TEXTAREA"){

                data.objects[o]["TEXT"].trim()!==""?enter_objects.push(data.objects[o]["TEXT"]):enter_objects.push(data.objects[o]["OBJ"]);


            }

        }
       

      }
    }
  });


}

