 <div class="modal fade" id="satta-edit-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{ ucfirst($manageSatta->title)}}</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
                <input type="hidden" name="update_id" id="update_id" value="{{ $manageSatta->id }}">
              <div class="box-body">
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Title</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="update_title" placeholder="Title" value="{{ $manageSatta->title}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
              

                

                <div class="form-group">
                  <label for="open_start_time" class="col-sm-3 control-label">Open Start time</label>

                  <div class="col-sm-9">
                    <input type="time" class="form-control" name="open_start_time" id="update_open_start_time" value="{{ $manageSatta->open_start_time}}" placeholder="Open Start Time">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="open_end_time" class="col-sm-3 control-label">Open End time</label>

                  <div class="col-sm-9">
                    <input type="time" class="form-control" name="open_end_time" id="update_open_end_time" placeholder="Open End Time" value="{{ $manageSatta->open_end_time}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

               <div class="form-group">
                  <label for="close_start_time" class="col-sm-3 control-label">Close Start time</label>

                  <div class="col-sm-9">
                    <input type="time" class="form-control" name="close_start_time" id="update_close_start_time" placeholder="Close Start Time" value="{{ $manageSatta->close_start_time}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="close_end_time" class="col-sm-3 control-label">Close End time</label>

                  <div class="col-sm-9">
                    <input type="time" class="form-control" name="close_end_time" id="update_close_end_time" placeholder="Close End Time" value="{{ $manageSatta->close_end_time}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>


                 <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Status</label>

                  <div class="col-sm-9">
                    
                    <select class="form-control" id="update_status">
                      <option value="y" @if($manageSatta->status == 'y') selected @endif  >Enable</option>
                      <option value="n" @if($manageSatta->status == 'n') selected @endif >Disable</option>
                    </select>
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="open_status" class="col-sm-3 control-label">Open Status</label>

                  <div class="col-sm-9">
                    
                    <select class="form-control" id="open_status">
                      <option value="y" @if($manageSatta->open_action == 'y') selected @endif  >Enable</option>
                      <option value="n" @if($manageSatta->open_action == 'n') selected @endif >Disable</option>
                    </select>
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="close_status" class="col-sm-3 control-label">Close Status</label>

                  <div class="col-sm-9">
                    
                    <select class="form-control" id="close_status">
                      <option value="y" @if($manageSatta->close_action == 'y') selected @endif  >Enable</option>
                      <option value="n" @if($manageSatta->close_action == 'n') selected @endif >Disable</option>
                    </select>
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

               
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple  satta-update">Update</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>