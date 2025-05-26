 <div class="modal fade" id="star-game-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                	@if($flag != null)
                	@if($flag == 'open')
                	{{ ucfirst($manageSatta->title) }} - Open Game
                   <?php $openPana = $manageSatta->open_pana ?>
                	@elseif($flag == 'close')
                	{{ ucfirst($manageSatta->title) }} - Close Game

                   <?php $openPana = $manageSatta->close_pana ?>
                	@endif
                	@endif

                </h4>
              </div>
              <div class="modal-body">
               	<input type="hidden" name="satta_id" id="satta_id" value="{{ $manageSatta->id }}">
               	<input type="hidden" name="satta_flag" id="satta_flag" value="{{ $flag }}">
              <div class="box-body">
                <div class="form-group">
                  <label for="pana" class="col-sm-3 control-label">Enter Pana</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="satta_pana" placeholder="Enter pana" value="{{ $openPana }}" >
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                <label for="pana" class="col-sm-3 control-label">Schedule Result</label>

                  <div class="col-sm-9">
                  @if($flag != null)
                  @if($flag == 'open')
    
                 <input type="date" class="form-control"  id="open_input_result_date" value="<?php echo date('Y-m-d'); ?>"   name="open_input_result_date">

                 <!-- <input type="datetime-local" value="<?php echo date("Y-m-d H:i",strtotime("now")); ?>"  class="form-control"  id="open_input_result_date" name="open_input_result_date"> -->
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                  @elseif($flag == 'close')
             <input type="date" class="form-control" id="close_input_result_date" value="<?php echo date('Y-m-d'); ?>"  name="close_input_result_date"  >

          <!--   <input type="datetime-local" value="<?php echo date("Y-m-d H:i",strtotime("now")); ?>"  class="form-control"  id="open_input_result_date" name="open_input_result_date"> -->
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                  @endif
                  @endif

                
              </div>
             
              <div class="box-footer">
                <button type="button"   data-dismiss="modal"  class="btn btn-default" >Close</button>
                <button type="button" class="btn bg-purple star-pana-update">Update</button>
              </div>
             
       
              </div>
             
            </div>
           
          </div>
         
        </div>

