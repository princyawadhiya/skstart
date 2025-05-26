
$(document).ready(function(){
    
    
    
    $("body").on("click",".return-point", function(){
       
       
       var id = $(this).attr("data-id");
       
       var checkstr =  confirm('are you sure you want to return point.?');
            if(checkstr === true){
                 $.ajax({
           method:'POST',
           url:'/parse/return-point',
           data:{"id":id},
           
           success:function(data){
               
               location.reload();
               
               
           }
           
       });
             
            }else{
            return false;
            }
       
       
       
       
      
        
    });

    $("body").on("click",".addSatta", function(){



        var title_val = $("#title").val();
        var open_start_time = $("#open_start_time").val();
        var open_end_time = $("#open_end_time").val();
        var close_start_time = $("#close_start_time").val();
        var close_end_time = $("#close_end_time").val();
        var status = $("#status").val();

        $.ajax({
            type:"POST",
            url:"/parse/add-satta",
            data:{
                "title_val":title_val,
                "open_start_time":open_start_time,
                "open_end_time":open_end_time,
                "close_start_time":close_start_time,
                "close_end_time":close_end_time,
                "status":status,
                
            },
            beforeSend: function(data) {

                $(".addSatta").attr("disabled","disabled");
            },

            success:function(data){
                  $('.addSatta').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.title_val != null && data.errors.title_val != undefined)
                    {
                        $("#title").next("p.open-errors").show().html(data.errors.title_val);
                    }
                    else
                    {
                        $("#title").next("p.open-errors").hide();
                    }

                   
                      /*open_time*/
                      if(data.errors.open_time != null && data.errors.open_time != undefined)
                    {
                        $("#open_time").next("p.open-errors").show().html(data.errors.open_time);
                    }
                    else
                    {
                        $("#open_time").next("p.open-errors").hide();
                    }

                      /*close_time*/
                      if(data.errors.close_time != null && data.errors.close_time != undefined)
                    {
                        $("#close_time").next("p.open-errors").show().html(data.errors.close_time);
                    }
                    else
                    {
                        $("#close_time").next("p.open-errors").hide();
                    }

                    /*open_start_time*/
                      if(data.errors.open_start_time != null && data.errors.open_start_time != undefined)
                    {
                        $("#open_start_time").next("p.open-errors").show().html(data.errors.open_start_time);
                    }
                    else
                    {
                        $("#open_start_time").next("p.open-errors").hide();
                    }

                    /*open_end_time*/
                     if(data.errors.open_end_time != null && data.errors.open_end_time != undefined)
                    {
                        $("#open_end_time").next("p.open-errors").show().html(data.errors.open_end_time);
                    }
                    else
                    {
                        $("#open_end_time").next("p.open-errors").hide();
                    }

                    /*close_start_time*/
                     if(data.errors.close_start_time != null && data.errors.close_start_time != undefined)
                    {
                        $("#close_start_time").next("p.open-errors").show().html(data.errors.close_start_time);
                    }
                    else
                    {
                        $("#close_start_time").next("p.open-errors").hide();
                    }

                      /*close_end_time*/
                     if(data.errors.close_end_time != null && data.errors.close_end_time != undefined)
                    {
                        $("#close_end_time").next("p.open-errors").show().html(data.errors.close_end_time);
                    }
                    else
                    {
                        $("#close_end_time").next("p.open-errors").hide();
                    }
                  


                    

                  }
                  else if(data.status == true)
                  {
                     $('body').find("#modal-default").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Added satta successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });

//send-notification

 $("body").on("click",".sendnotification", function(){

 

        var title = $("#title").val();
        var message = $("#message").val();
        var member_id =$("#member_id").val();
        

        $.ajax({
        
            type:"POST",
            url:"/send_notification",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data:{
                "title":title,
                "message":message,
                "member_id":member_id,
       
                
            },
            beforeSend: function(data) {

                $(".sendnotification").attr("disabled","disabled");
            },

            success:function(data){
                  $('.sendnotification').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.title != null && data.errors.title != undefined)
                    {
                        $("#title").next("p.open-errors").show().html(data.errors.title);
                    }
                    else
                    {
                        $("#title").next("p.open-errors").hide();
                    }

                   
                      /*message*/
                      if(data.errors.message != null && data.errors.message != undefined)
                    {
                        $("#message").next("p.open-errors").show().html(data.errors.message);
                    }
                    else
                    {
                        $("#message").next("p.open-errors").hide();
                    }

                  
                  }
                  else if(data.status == true)
                  {
                     //$('body').find("#modal-default").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "send notification  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });

//star line games

    $("body").on("click",".addStarline", function(){

        var title_val = $("#title").val();
        var open_end_time = $("#open_end_time").val();
        var status = $("#status").val();

        $.ajax({
            type:"POST",
            url:"/parse/add-starline",
            data:{
                "title_val":title_val,
                "open_end_time":open_end_time,
                "status":status,
                
            },
            beforeSend: function(data) {

                $(".addSatta").attr("disabled","disabled");
            },

            success:function(data){
                  $('.addSatta').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.title_val != null && data.errors.title_val != undefined)
                    {
                        $("#title").next("p.open-errors").show().html(data.errors.title_val);
                    }
                    else
                    {
                        $("#title").next("p.open-errors").hide();
                    }

                    /*open_end_time*/
                     if(data.errors.open_end_time != null && data.errors.open_end_time != undefined)
                    {
                        $("#open_end_time").next("p.open-errors").show().html(data.errors.open_end_time);
                    }
                    else
                    {
                        $("#open_end_time").next("p.open-errors").hide();
                    }

                  }
                  else if(data.status == true)
                  {
                     $('body').find("#modal-default").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Added Star Line successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }  

            }
        });

    });
/*pointTransfer-openModal*/
$("body").on("click",".pointTransfer-openModal", function(){
    
        var id = $(this).attr('data-id');

        $.ajax({
            type:"POST",
            url:"/parse/pointtransfer-openmodal",
            data:{
                
                "id":id,
                
            },
            beforeSend: function(data) {

                $(".pointTransfer-openModal").attr("disabled","disabled");
            },

            success:function(data){
                  $('.pointTransfer-openModal').removeAttr("disabled");
                   $("#modal-show").html(data);
                 $('body').find("#pointTransfer").modal('show');
              }
      });

});
$("body").on("click",".pointWithdrawn-modal", function(){
    
        var id = $(this).attr('data-id');

        $.ajax({
            type:"POST",
            url:"/parse/point-withdrawn",
            data:{
                
                "id":id,
                
            },
            beforeSend: function(data) {

                $(".pointWithdrawn").attr("disabled","disabled");
            },

            success:function(data){
                  $('.pointWithdrawn').removeAttr("disabled");
                   $("#modal-show").html(data);
                 $('body').find("#pointWithdrawn").modal('show');
              }
      });

});

$("body").on("click",".pointRequestWithdrawn-modal", function(){
    
        var id = $(this).attr('data-id');
        var point_request_id = $(this).attr('data-request-id');

        $.ajax({
            type:"POST",
            url:"/parse/point-request-withdrawn",
            data:{
                
                "id":id,
                "point_request_id":point_request_id,
                
            },
            beforeSend: function(data) {

                $(".pointRequestWithdrawn").attr("disabled","disabled");
            },

            success:function(data){
                  $('.pointRequestWithdrawn').removeAttr("disabled");
                   $("#modal-show").html(data);
                 $('body').find("#pointReauestWithdrawn").modal('show');
              }
      });

});
/*point withdrawn*/

/*satta update*/
 $("body").on("click",".satta-update", function(){



        var title_val = $("#update_title").val();
        var open_start_time = $("#update_open_start_time").val();
        var open_end_time = $("#update_open_end_time").val();
        var close_start_time = $("#update_close_start_time").val();
        var close_end_time = $("#update_close_end_time").val();
        var status = $("#update_status").val();
        var id = $("#update_id").val();
        var open_status = $("#open_status").val();
        var close_status = $("#close_status").val();

        $.ajax({
            type:"POST",
            url:"/parse/satta-update",
            data:{
                "title_val":title_val,
                "open_start_time":open_start_time,
                "open_end_time":open_end_time,
                "close_start_time":close_start_time,
                "close_end_time":close_end_time,
                "status":status,
                "id":id,
                "open_status":open_status,
                "close_status":close_status,
                
            },
            beforeSend: function(data) {

                $(".addSatta").attr("disabled","disabled");
            },

            success:function(data){
                  $('.addSatta').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.title_val != null && data.errors.title_val != undefined)
                    {
                        $("#update_title").next("p.open-errors").show().html(data.errors.title_val);
                    }
                    else
                    {
                        $("#update_title").next("p.open-errors").hide();
                    }

                   
                      /*open_time*/
                      if(data.errors.open_time != null && data.errors.open_time != undefined)
                    {
                        $("#update_open_time").next("p.open-errors").show().html(data.errors.open_time);
                    }
                    else
                    {
                        $("#update_open_time").next("p.open-errors").hide();
                    }

                      /*close_time*/
                      if(data.errors.close_time != null && data.errors.close_time != undefined)
                    {
                        $("#update_close_time").next("p.open-errors").show().html(data.errors.close_time);
                    }
                    else
                    {
                        $("#update_close_time").next("p.open-errors").hide();
                    }

                    /*open_start_time*/
                      if(data.errors.open_start_time != null && data.errors.open_start_time != undefined)
                    {
                        $("#update_open_start_time").next("p.open-errors").show().html(data.errors.open_start_time);
                    }
                    else
                    {
                        $("#update_open_start_time").next("p.open-errors").hide();
                    }

                    /*open_end_time*/
                     if(data.errors.open_end_time != null && data.errors.open_end_time != undefined)
                    {
                        $("#update_open_end_time").next("p.open-errors").show().html(data.errors.open_end_time);
                    }
                    else
                    {
                        $("#update_open_end_time").next("p.open-errors").hide();
                    }

                    /*close_start_time*/
                     if(data.errors.close_start_time != null && data.errors.close_start_time != undefined)
                    {
                        $("#update_close_start_time").next("p.open-errors").show().html(data.errors.close_start_time);
                    }
                    else
                    {
                        $("#update_close_start_time").next("p.open-errors").hide();
                    }

                      /*close_end_time*/
                     if(data.errors.close_end_time != null && data.errors.close_end_time != undefined)
                    {
                        $("#update_close_end_time").next("p.open-errors").show().html(data.errors.close_end_time);
                    }
                    else
                    {
                        $("#update_close_end_time").next("p.open-errors").hide();
                    }
                  


                    

                  }
                  else if(data.status == true)
                  {
                     $('body').find("#satta-edit-modal").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Updated  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });

/*star Game update*/
 $("body").on("click",".star-game-update", function(){



        var title_val = $("#update_title").val();
        var open_end_time = $("#update_open_end_time").val();
        var status = $("#update_status").val();
        var id = $("#update_id").val();
        var open_status = $("#open_status").val();

        $.ajax({
            type:"POST",
            url:"/parse/star-game-update",
            data:{
                "title_val":title_val,
                "open_end_time":open_end_time,
                "status":status,
                "id":id,
                "open_status":open_status,                
            },
            beforeSend: function(data) {

                $(".addSatta").attr("disabled","disabled");
            },

            success:function(data){
                  $('.addSatta').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.title_val != null && data.errors.title_val != undefined)
                    {
                        $("#update_title").next("p.open-errors").show().html(data.errors.title_val);
                    }
                    else
                    {
                        $("#update_title").next("p.open-errors").hide();
                    }


                    /*open_end_time*/
                     if(data.errors.open_end_time != null && data.errors.open_end_time != undefined)
                    {
                        $("#update_open_end_time").next("p.open-errors").show().html(data.errors.open_end_time);
                    }
                    else
                    {
                        $("#update_open_end_time").next("p.open-errors").hide();
                    }

                  
                  }
                  else if(data.status == true)
                  {
                     $('body').find("#star-edit-modal").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Updated  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });

/*satta-view*/
$("body").on("click",".satta-view", function(){

     
        var id = $(this).attr('data-id');
       

        $.ajax({
            type:"POST",
            url:"/parse/satta-view",
            data:{
                "id":id},
            beforeSend: function(data) {

                $(".satta-view").attr("disabled","disabled");
            },

            success:function(data){

                $("#game-model-show").html(data);
                 $('body').find("#satta-view").modal('show');

            }
            });

});

/*star-view*/
$("body").on("click",".star-view", function(){

     
        var id = $(this).attr('data-id');
       

        $.ajax({
            type:"POST",
            url:"/parse/stargame-view",
            data:{
                "id":id},
            beforeSend: function(data) {

                $(".star-view").attr("disabled","disabled");
            },

            success:function(data){
                  $(".star-view").removeAttr("disabled");
                  $("#star-view-show").html(data);
                 $('body').find("#star-view").modal('show');

            }
            });

});

// open game 

$("body").on("click",".game-modal", function(){

     var id = $(this).attr("data-id");
     var flag = $(this).attr("data-flag");



    $.ajax({

        type:"POST",
        url:"/parse/game-modal",
        data:{
            "id":id,
            "flag":flag,
             },

             beforeSend: function(data) {

                $(".game-modal").attr("disabled","disabled");
            },

             success:function(data)
             {
                $(".game-modal").removeAttr("disabled");
                $("#game-model-show").html(data);
                $('body').find("#game-modal").modal('show');

             }

    });

});
/*star game open */

$("body").on("click",".star-game-modal", function(){

     var id = $(this).attr("data-id");
     var flag = $(this).attr("data-flag");



    $.ajax({

        type:"POST",
        url:"/parse/star-game-modal",
        data:{
            "id":id,
            "flag":flag,
             },

             beforeSend: function(data) {

                $(".star-game-modal").attr("disabled","disabled");
            },

             success:function(data)

             {
                $(".star-game-modal").removeAttr("disabled");
                $("#star-game-model-show").html(data);
                $('body').find("#star-game-modal").modal('show');

             }

    });

});
/*satta-edit*/

$("body").on("click",".satta-edit", function(){

     var id = $(this).attr("data-id");
    



    $.ajax({

        type:"POST",
        url:"/parse/satta-edit",
        data:{
            "id":id},

             beforeSend: function(data) {

                $(".satta-edit").attr("disabled","disabled");
            },

             success:function(data)
             {
                $(".satta-edit").removeAttr("disabled");
                $("#game-model-show").html(data);
                $('body').find("#satta-edit-modal").modal('show');

             }

    });

});

/*star-edit*/

$("body").on("click",".star-edit", function(){

     var id = $(this).attr("data-id");
    



    $.ajax({

        type:"POST",
        url:"/parse/star-edit",
        data:{
            "id":id},

             beforeSend: function(data) {

                $(".star-edit").attr("disabled","disabled");
            },

             success:function(data)
             {
                $(".star-edit").removeAttr("disabled");
                $("#star-edit-show").html(data);
                $('body').find("#star-edit-modal").modal('show');

             }

    });

});

/*satta-delete*/
 $("body").on("click",".satta-delete", function () {

       var id = $(this).attr("data-id");
        var this_class = $(this);

        $.confirm({
            title: 'Confirm delete!',
            content: 'Are you sure you want to delete this.',
            buttons: {
                confirm: function () {

                    /*satrt*/
                   $.ajax({

                    type:"POST",
                    url:"/parse/satta-delete",
                    data:{"id":id},

                    beforeSend: function(data) {

                            $(".satta-delete").attr("disabled","disabled");
                        },
                    success:function(data){

                       
                         $(".satta-delete").removeAttr("disabled");
                        $(this_class).parents('.row-'+id).remove();

                         $.alert({
                             title: 'Success !',
                             content: "Deleted  successfully.",
                         });


                    }


                 });
                    /*end*/

                },
                cancel: function () {
                    $.alert('Canceled!');
                },

            }
        });
    });



	
	$("body").on("click",".open-pana", function(){

		var open_pana = $("#open_pana").val();

     $.ajax({
     	type:"POST",
     	url:"/parse/open-pana",
     	data:{"open_pana":open_pana},

     	success:function(data){

     		if(data.status == false){

     			if(data.errors.open_pana != null && data.errors.open_pana != undefined)
     			{
     				$(".open-errors").show().html(data.errors.open_pana);
     			}
     			else
     			{
     				$(".open-errors").hide();
     			}
     			

     		}
               else if(data.status == true)
               {
                   
                    if(data.response_status == false)
                    {

                         $(".open-errors").show().html(data.response_message);


                                 $.alert({
                             title: 'oops error !',
                             content: data.response_message,
                         });

                    }
                    else if(data.response_status == true)
                    {
                         if(data.data_response_satta_check == true)
                         {
                               $(".open-errors").hide();
                         $("#open_pana").val(" ");
                         $(".open_pana_data").html(data.response_data.open_pana);
                         $(".open_number_data").html(data.response_data.open_number);
                         $(".open_aakda_data").html(data.response_data.open_aakda);
                               $.alert({
                             title: 'Success !',
                             content: data.response_message,
                         });

                         }
                         else if(data.data_response_satta_check == false)
                         {
                               $.alert({
                             title: 'Oops !',
                             content: data.response_message,
                         });

                         }
                        
                        
                    }

               }

     	}
     })

	});

    /*update-pana*/

    $("body").on("click",".update-pana", function(){
        

        var id = $("#satta_id").val();
        var flag = $("#satta_flag").val();
        var pana = $("#satta_pana").val();
        var open_input_result_date = $("#open_input_result_date").val();
        var close_input_result_date = $("#close_input_result_date").val();



        $.ajax({
          type:"POST",
          url:"/parse/pana-update",
          data:{
            "id":id,
            "flag":flag,
            "pana":pana,
            "open_input_result_date":open_input_result_date,
            "close_input_result_date":close_input_result_date,
        },



         beforeSend: function(data) {

                $(".update-pana").attr("disabled","disabled");
            },

        success:function(data){
            $('.update-pana').removeAttr("disabled");

      
            if(data.status == false){
               
                if(data.errors.pana != null && data.errors.pana != undefined)
                {
                    $("#satta_pana").next("p.open-errors").show().html(data.errors.pana);
                }
               
                else
                {
                   $("#satta_pana").next("p.open-errors").hide();
                }
                
                if(data.errors.open_input_result_date != null && data.errors.open_input_result_date != undefined)
                {
                    $("#open_input_result_date").next("p.open-errors").show().html(data.errors.open_input_result_date);
                }
               
                else
                {
                   $("#open_input_result_date").next("p.open-errors").hide();
                }
                
                

            }
               else if(data.status == true)
               {
                if(data.pana_status == 'open')
                {

                    $('body').find("#game-modal").modal('hide');

                $.alert({
                     title: 'Success',
                     content: "successfully Updated.",
                 });
              
                 //location.reload();

                }
                else if(data.pana_status == 'close')
                {

                    if(data.closepana_status == true)
                    {
                         $('body').find("#game-modal").modal('hide');

                         $.alert({
                     title: 'Success',
                     content: "successfully Updated.",
                 });
                 
                    // location.reload();

                 

                    }
                    else if(data.closepana_status == false)
                    {

                         $.alert({
                     title: 'Oops !',
                     content: "Update open pana then update close pana.",
                 });

                    }
                }
                
               

                  

               }
        },
            error: function (xhr, statusText, errorThrown) {
                
                        $.alert({
                             title: 'Oops !',
                             content: "Something Went Wrong Please Wait.",
                         });

             if (xhr.status == '401') {
              // location.reload();
             } else {
               // location.reload();
             }
         }

         });
    });

    $("body").on("click",".user-detail", function(){
      var id = $(this).attr('data-id');
       

        $.ajax({
            type:"POST",
            url:"/parse/user-detail",
            data:{
                "id":id},
            beforeSend: function(data) {

                $(".user-detail").attr("disabled","disabled");
            },

            success:function(data){
                
                 $(".user-detail").removeAttr("disabled");

                $("#modal-show").html(data);
                 $('body').find("#user-detail").modal('show');

            }
            });

    });

     $("body").on("click",".close-pana", function(){

          

          var close_pana = $("#close_pana").val();

     $.ajax({
          type:"POST",
          url:"/parse/close-pana",
          data:{"close_pana":close_pana},

          success:function(data){

               if(data.status == false){

                    if(data.errors.close_pana != null && data.errors.close_pana != undefined)
                    {
                         $(".close-errors").show().html(data.errors.close_pana);
                    }
                    else
                    {
                         $(".close-errors").hide();
                    }
                    

               }
               else if(data.status == true)
               {
                   
                    if(data.response_status == false)
                    {

                         $(".close-errors").show().html(data.response_message);


                                 $.alert({
                             title: 'oops error !',
                             content: data.response_message,
                         });

                    }
                    else if(data.response_status == true)
                    {
                         if(data.data_response_satta_check == true)
                         {
                               $(".close-errors").hide();
                         $("#close_pana").val(" ");
                         $(".close_pana_data").html(data.response_data.close_pana);
                         $(".close_number_data").html(data.response_data.close_number);
                         $(".close_aakda_data").html(data.response_data.close_aakda);
                         $(".close_jodi_data").html(data.response_data.close_jodi);
                               $.alert({
                             title: 'Success !',
                             content: data.response_message,
                         });

                         }
                         else if(data.data_response_satta_check == false)
                         {
                               $.alert({
                             title: 'Oops !',
                             content: data.response_message,
                         });

                         }
                        
                        
                    }

               }

          }
     })

     });


     /*point request delete*/
     $("body").on("click",".point-request-delete", function () {

       var id = $(this).attr("data-id");
        var this_class = $(this);

        $.confirm({
            title: 'Confirm delete!',
            content: 'Are you sure you want to delete this.',
            buttons: {
                confirm: function () {

                    /*satrt*/
                   $.ajax({

                    type:"POST",
                    url:"/parse/point-request-delete",
                    data:{"id":id},

                    beforeSend: function(data) {

                            $(".point-request-delete").attr("disabled","disabled");
                        },
                    success:function(data){

                       
                            $(".point-request-delete").removeAttr("disabled");

                        $(this_class).parents('.row-'+id).remove();

                         $.alert({
                             title: 'Success !',
                             content: "Deleted  successfully.",
                         });


                    }


                 });
                    /*end*/

                },
                cancel: function () {
                    $.alert('Canceled!');
                },

            }
        });
    });

     /*game delete*/
     /*satta-delete*/
 $("body").on("click",".game-delete", function () {

       var id = $(this).attr("data-id");
        var this_class = $(this);

        $.confirm({
            title: 'Confirm delete!',
            content: 'Are you sure you want to delete this.',
            buttons: {
                confirm: function () {

                    /*satrt*/
                   $.ajax({

                    type:"POST",
                    url:"/parse/game-delete",
                    data:{"id":id},

                    beforeSend: function(data) {

                            $(".satta-delete").attr("disabled","disabled");
                        },
                    success:function(data){

                       
                         $(".satta-delete").removeAttr("disabled");
                        $(this_class).parents('.row-'+id).remove();

                         $.alert({
                             title: 'Success !',
                             content: "Deleted  successfully.",
                         });


                    }


                 });
                    /*end*/

                },
                cancel: function () {
                    $.alert('Canceled!');
                },

            }
        });
    });

 /*game-edit*/

$("body").on("click",".game-edit", function(){

     var id = $(this).attr("data-id");
    



    $.ajax({

        type:"POST",
        url:"/parse/game-edit",
        data:{
            "id":id},

             beforeSend: function(data) {

                $(".game-edit").attr("disabled","disabled");
            },

             success:function(data)
             {
                $(".game-edit").removeAttr("disabled");
                $("#game-model-show").html(data);
                $('body').find("#game-edit-modal").modal('show');

             }

    });

});

/*star game rate edit */
$("body").on("click",".stargame-rate-edit", function(){

     var id = $(this).attr("data-id");
    



    $.ajax({

        type:"POST",
        url:"/parse/stargame-rate-edit",
        data:{
            "id":id},

             beforeSend: function(data) {

                $(".stargame-rate-edit").attr("disabled","disabled");
            },

             success:function(data)
             {
                $(".stargame-rate-edit").removeAttr("disabled");
                $("#game-model-show").html(data);
                $('body').find("#stargame-rate-edit-model").modal('show');

             }

    });

});

 /*bidding-edit*/

$("body").on("click",".bidding-edit", function(){

     var id = $(this).attr("data-id");
    



    $.ajax({

        type:"POST",
        url:"/parse/bidding-edit",
        data:{
            "id":id},

             beforeSend: function(data) {

                $(".bidding-edit").attr("disabled","disabled");
            },

             success:function(data)
             {
                $(".bidding-edit").removeAttr("disabled");
                $("#model-show").html(data);
                $('body').find("#bidding-edit-modal").modal('show');

             }

    });

});


// delete enquery
$("body").on('click','.delete-enquery',function(){


var Id = $(this).attr("data-id");

$.ajax({
    type:'post',
    url :'/parse/delete-enquery',
    data:{
        "id":Id
    },
    success:function(data){

       location.reload();
    }

})

})

/*game update*/
 $("body").on("click",".game-update", function(){



        var game_name = $("#update_game_name").val();
        var game_rate = $("#update_game_rate").val();
         var game_rate_limit = $("#update_game_rate_limit").val();
        var status = $("#update_status").val();
        var id = $("#update_id").val();

        $.ajax({
            type:"POST",
            url:"/parse/game-update",
            data:{
             "game_name":game_name,
             "game_rate":game_rate,
             "game_rate_limit":game_rate_limit,
             "status":status,
             "id":id,
                
            },
            beforeSend: function(data) {

                $(".game-update").attr("disabled","disabled");
            },

            success:function(data){
                  $('.game-update').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.game_name != null && data.errors.game_name != undefined)
                    {
                        $("#update_game_name").next("p.open-errors").show().html(data.errors.game_name);
                    }
                    else
                    {
                        $("#update_game_name").next("p.open-errors").hide();
                    }

                    /**/
                    
                      if(data.errors.game_rate != null && data.errors.game_rate != undefined)
                    {
                        $("#update_game_rate").next("p.open-errors").show().html(data.errors.game_rate);
                    }
                    else
                    {
                        $("#update_game_rate").next("p.open-errors").hide();
                    }

                    /*update_game_rate_limit*/
                     if(data.errors.game_rate_limit != null && data.errors.game_rate_limit != undefined)
                    {
                        $("#update_game_rate_limit").next("p.open-errors").show().html(data.errors.game_rate_limit);
                    }
                    else
                    {
                        $("#update_game_rate_limit").next("p.open-errors").hide();
                    }

                   


                    

                  }
                  else if(data.status == true)
                  {
                     $('body').find("#game-edit-modal").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Updated  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });
/*star game Rate update*/
 $("body").on("click",".stargame-rate-update", function(){



        var game_name = $("#update_game_name").val();
        var game_rate = $("#update_game_rate").val();
         var game_rate_limit = $("#update_game_rate_limit").val();
        var status = $("#update_status").val();
        var id = $("#update_id").val();

        $.ajax({
            type:"POST",
            url:"/parse/stargamerate-update",
            data:{
             "game_name":game_name,
             "game_rate":game_rate,
             "game_rate_limit":game_rate_limit,
             "status":status,
             "id":id,
                
            },
            beforeSend: function(data) {

                $(".stargame-rate-update").attr("disabled","disabled");
            },

            success:function(data){
                  $('.stargame-rate-update').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.game_name != null && data.errors.game_name != undefined)
                    {
                        $("#update_game_name").next("p.open-errors").show().html(data.errors.game_name);
                    }
                    else
                    {
                        $("#update_game_name").next("p.open-errors").hide();
                    }

                    /**/
                    
                      if(data.errors.game_rate != null && data.errors.game_rate != undefined)
                    {
                        $("#update_game_rate").next("p.open-errors").show().html(data.errors.game_rate);
                    }
                    else
                    {
                        $("#update_game_rate").next("p.open-errors").hide();
                    }

                    /*update_game_rate_limit*/
                     if(data.errors.game_rate_limit != null && data.errors.game_rate_limit != undefined)
                    {
                        $("#update_game_rate_limit").next("p.open-errors").show().html(data.errors.game_rate_limit);
                    }
                    else
                    {
                        $("#update_game_rate_limit").next("p.open-errors").hide();
                    }

                   


                    

                  }
                  else if(data.status == true)
                  {
                     $('body').find("#stargame-rate-edit-model").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Updated  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });
 /*bidding update*/
  $("body").on("click",".bidding-update", function(){



        var points = $("#points").val();
        var change_point = $("#change_point").val();
        var change_digit = $("#change_digit").val();
        var message = $("#message").val();
        var oldmessage =$('#oldmessage').val();

        var id = $("#update_id").val();

        $.ajax({
            type:"POST",
            url:"/parse/bidding-update",
            data:{
             "points":points,
             "change_point":change_point,
              "id":id,
              "change_digit":change_digit,
              "message":message,
              "oldmessage":oldmessage,
                
            },
            beforeSend: function(data) {

                $(".bidding-update").attr("disabled","disabled");
            },

            success:function(data){
                  $('.bidding-update').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.points != null && data.errors.points != undefined)
                    {
                        $("#points").next("p.open-errors").show().html(data.errors.points);
                    }
                    else
                    {
                        $("#points").next("p.open-errors").hide();
                    }

                    /*change_point*/
                      if(data.errors.change_point != null && data.errors.change_point != undefined)
                    {
                        $("#change_point").next("p.open-errors").show().html(data.errors.change_point);
                    }
                    else
                    {
                        $("#change_point").next("p.open-errors").hide();
                    }

                    
                   


                    

                  }
                  else if(data.status == true)
                  {
                    
                     if(data.if_exists == true)
                     {
                         $('body').find("#bidding-edit-modal").modal('hide');
                         $.alert({
                             title: 'Success !',
                             content: data.message,
                         });

                             setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                     }
                     else if(data.if_exists == false)
                     {
                         $.alert({
                             title: 'Oops !',
                             content: data.message,
                         });

                     }

                    

               

                  }

                  

            }
        });

    });

 /*game add*/
 $("body").on("click",".game-save", function(){



        var game_name = $("#game_name").val();
        var game_rate = $("#game_rate").val();
        var game_rate_limit = $("#game_rate_limit").val();
        var status = $("#status").val();
       

        $.ajax({
            type:"POST",
            url:"/parse/game-save",
            data:{
             "game_name":game_name,
             "game_rate":game_rate,
             "game_rate_limit":game_rate_limit,
             "status":status,
             
                
            },
            beforeSend: function(data) {

                $(".game-save").attr("disabled","disabled");
            },

            success:function(data){
                  $('.game-save').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.game_name != null && data.errors.game_name != undefined)
                    {
                        $("#game_name").next("p.open-errors").show().html(data.errors.game_name);
                    }
                    else
                    {
                        $("#game_name").next("p.open-errors").hide();
                    }

                    /*game_rate*/
                     /*title*/
                      if(data.errors.game_rate != null && data.errors.game_rate != undefined)
                    {
                        $("#game_rate").next("p.open-errors").show().html(data.errors.game_rate);
                    }
                    else
                    {
                        $("#game_rate").next("p.open-errors").hide();
                    }
                    /*game_rate_limit*/
                     if(data.errors.game_rate_limit != null && data.errors.game_rate_limit != undefined)
                    {
                        $("#game_rate_limit").next("p.open-errors").show().html(data.errors.game_rate_limit);
                    }
                    else
                    {
                        $("#game_rate_limit").next("p.open-errors").hide();
                    }

                   


                    

                  }
                  else if(data.status == true)
                  {
                     $('body').find("#game-add-modal").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Added  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });

 $("body").on("click","#cancel", function(){
   $("#reason_div").show();

   $("#option_val").val('c');

 });
 $("body").on("click","#accepte", function(){
   $("#reason_div").hide();
   $("#option_val").val('a');

 });

 /*request-point-post*/
  $("body").on("click",".request-point-post", function(){

    var id = $("#update_id").val();
    var reason = $("#reason").val();
    var option = $("#option_val").val();
   

    $.ajax({
            type:"POST",
            url:"/parse/request-point-post",
            data:{
             "id":id,
             "reason":reason,
             "option":option,
            
            
            
             
                
            },
            beforeSend: function(data) {

                $(".request-point-post").attr("disabled","disabled");
            },

            success:function(data){
                  $('.request-point-post').removeAttr("disabled");
                  
               

                 if(data.status == false)
                  {
                   
                  
                    /*title*/
                      if(data.errors.reason != null && data.errors.reason != undefined)
                    {
                        $("#reason").next("p.open-errors").show().html(data.errors.reason);
                    }
                    else
                    {
                        $("#reason").next("p.open-errors").hide();
                    }
                 }
                 else if(data.status == true)
                 {
                      $('body').find("#pointRequest").modal('hide');
                        $.alert({
                             title: 'Success !',
                             content: "Updated  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);
                 }
            }

            });

  });

 /*point-request-Action*/
  $("body").on("click",".point-request", function(){

    var id = $(this).attr("data-id");


    $.ajax({
            type:"POST",
            url:"/parse/point-request",
            data:{
             "id":id,
            
            
             
                
            },
            beforeSend: function(data) {

                $(".point-request").attr("disabled","disabled");
            },

            success:function(data){
                  $('.point-request').removeAttr("disabled");
                  $("#modal-show").html(data);
                 $('body').find("#pointRequest").modal('show');
            }

            });

  });

 /*point-transfer*/
 $("body").on("click",".pointTransfer", function(){



        var points = $("#points").val();
        var id = $("#user_id").val();
  
       

        $.ajax({
            type:"POST",
            url:"/parse/point-transfer",
            data:{
             "points":points,
             "id":id,
            
             
                
            },
            beforeSend: function(data) {

                $(".pointTransfer").attr("disabled","disabled");
            },

            success:function(data){
                  $('.pointTransfer').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.points != null && data.errors.points != undefined)
                    {
                        $("#points").next("p.open-errors").show().html(data.errors.points);
                    }
                    else
                    {
                        $("#points").next("p.open-errors").hide();
                    }

                    

                   


                    

                  }
                  else if(data.status == true)
                  {
                     $('body').find("#pointTransfer").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Point deposit  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                  }

                  

            }
        });

    });

 $("body").on("click",".pointWithdrawn", function(){



        var points = $("#points").val();
        var id = $("#user_id").val();
  
       

        $.ajax({
            type:"POST",
            url:"/parse/point-withdrawn-update",
            data:{
             "points":points,
             "id":id,
            
             
                
            },
            beforeSend: function(data) {

                $(".pointWithdrawn").attr("disabled","disabled");
            },

            success:function(data){
                  $('.pointWithdrawn').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.points != null && data.errors.points != undefined)
                    {
                        $("#points").next("p.open-errors").show().html(data.errors.points);
                    }
                    else
                    {
                        $("#points").next("p.open-errors").hide();
                    }

                    

                   


                    

                  }
                  else if(data.status == true)
                  {
                    if(data.amount_status == true)
                    {
                         $('body').find("#pointWithdrawn").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Point withdrawn  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                    }
                    else if(data.amount_status == false)
                    {

                         $.alert({
                             title: 'Oops !',
                             content: "Account has not sufficient balance.",
                         });

                    }
                    

                  }

                  

            }
        });

    });

 $("body").on("click",".pointRequestWithdrawn", function(){



        var points = $("#points").val();
        var id = $("#user_id").val();
        var point_request_id = $("#point_request_id").val();
  
       

        $.ajax({
            type:"POST",
            url:"/parse/point-request-withdrawn-update",
            data:{
             "points":points,
             "id":id,
             "point_request_id":point_request_id,
            
             
                
            },
            beforeSend: function(data) {

                $(".pointRequestWithdrawn").attr("disabled","disabled");
            },

            success:function(data){
                  $('.pointRequestWithdrawn').removeAttr("disabled");

                  if(data.status == false)
                  {
                  
                    /*title*/
                      if(data.errors.points != null && data.errors.points != undefined)
                    {
                        $("#points").next("p.open-errors").show().html(data.errors.points);
                    }
                    else
                    {
                        $("#points").next("p.open-errors").hide();
                    }

                    

                   


                    

                  }
                  else if(data.status == true)
                  {
                    if(data.amount_status == true)
                    {
                         $('body').find("#pointReauestWithdrawn").modal('hide');

                     $.alert({
                             title: 'Success !',
                             content: "Point withdrawn  successfully.",
                         });

                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                    }
                    else if(data.amount_status == false)
                    {

                         $.alert({
                             title: 'Oops !',
                             content: "Account has not sufficient balance.",
                         });

                    }
                    

                  }

                  

            }
        });

    });

 $("body").on("click",".pointRequestWithdrawnAlert", function(){

                            $.alert({
                             title: 'Oops !',
                             content: "You have already withdrawal ",
                         });


 });

})

/* star line pana update */

    $("body").on("click",".star-pana-update", function(){
        

        var id = $("#satta_id").val();
        var flag = $("#satta_flag").val();
        var pana = $("#satta_pana").val();
        var open_input_result_date = $("#open_input_result_date").val();
        var close_input_result_date = $("#close_input_result_date").val();

        $.ajax({
          type:"POST",
          url:"/parse/starpana",
          data:{
            "id":id,
            "flag":flag,
            "pana":pana,
            "open_input_result_date":open_input_result_date,

        },

         beforeSend: function(data) {

                $(".star-pana-update").attr("disabled","disabled");
            },

        success:function(data){
            $('.star-pana-update').removeAttr("disabled");
            if(data.status == false){
               
               

                if(data.errors.pana != null && data.errors.pana != undefined)
                {
                    $("#satta_pana").next("p.open-errors").show().html(data.errors.pana);
                }
                else
                {
                   $("#satta_pana").next("p.open-errors").hide();
                }
                
                
                

            }
               else if(data.status == true)
               {
                if(data.pana_status == 'open')
                {

                    $('body').find("#star-game-modal").modal('hide');

                $.alert({
                     title: 'Success',
                     content: "successfully Updated.",
                 });
              
                   setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                }
                else if(data.pana_status == 'close')
                {

                    if(data.closepana_status == true)
                    {
                         $('body').find("#star-game-modal").modal('hide');

                         $.alert({
                     title: 'Success',
                     content: "successfully Updated.",
                 });
                 
                     setTimeout(function(){
                       window.location.reload(1);
                    }, 3000);

                 

                    }
                    else if(data.closepana_status == false)
                    {

                         $.alert({
                     title: 'Oops !',
                     content: "Update open pana then update close pana.",
                 });

                    }
                }
   

               }
        },
            error: function (xhr, statusText, errorThrown) {
                
                        $.alert({
                             title: 'Oops !',
                             content: "Something Went Wrong Please Wait.",
                         });
                        

         }

         });
    });