 <div class="modal fade" id="modal-default">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Add Start line</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Title</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="title" placeholder="Title">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
                 <div class="form-group">
                  <label for="open_end_time" class="col-sm-3 control-label"> End time</label>

                  <div class="col-sm-9">
                    <input type="time" class="form-control" name="open_end_time" id="open_end_time" placeholder=" End Time">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
                  <div class="form-group">
                  <label for="status" class="col-sm-3 control-label">Status</label>

                  <div class="col-sm-9">
                    
                    <select class="form-control" id="status">
                      <option value="y" >Enable</option>
                      <option value="n" >Disable</option>
                    </select>
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
               
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple addStarline">Submit</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>