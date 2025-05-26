 <div class="modal fade" id="delhiGameResultModal"  ref="resultUpdateGamesformContainer" >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Update  Result - @{{ delhiGame.title }}</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal" >
              <div class="box-body">
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Enter Pana</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="pana" placeholder="Title" v-model="pana">
                     <p v-if="errors.pana" style="color:red;"> @{{ errors.pana[0]}}</p>
                  </div>
                </div>
                <div class="form-group"> 
              <label for="title" class="col-sm-3 control-label">Schedule Result</label>
                <div class="col-sm-9">
                   
         
                 <input type="date" class="form-control" value="<?php echo date('Y-m-d'); ?>"  id="open_input_result_date"  name="open_input_result_date" v-model="open_input_result_date">

                <!--  <input type="datetime-local" value="<?php echo date("Y-m-d H:i",strtotime("now")); ?>"  class="form-control"  id="open_input_result_date" name="open_input_result_date" v-model="open_input_result_date" > -->

                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                
             </div>

                 

            

               
             
               
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple " v-on:click="resultUpdateGames">Update</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>