 <div class="modal fade" id="delhiGameModal">
          <div class="modal-dialog" ref="addDelhiGameformContainer">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Add Delhi Game</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Title</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
                     <p v-if="errors.title" style="color:red;"> @{{ errors.title[0]}}</p>
                  </div>
                </div>
              

                


                 <div class="form-group">
                  <label for="open_end_time" class="col-sm-3 control-label">Andar Haruf End time</label>

                  <div class="col-sm-9">
                    <input type="time" class="form-control" name="open_end_time" id="open_end_time" placeholder="Open End Time" v-model=" open_end_time">
                     <p v-if="errors.open_end_time" style="color:red;"> @{{ errors.open_end_time[0]}}</p>
                  </div>
                </div>

            

                 <div class="form-group">
                  <label for="close_end_time" class="col-sm-3 control-label">Bahar Haruf End time</label>

                  <div class="col-sm-9">
                    <input type="time" class="form-control" name="close_end_time" id="close_end_time" placeholder="Close End Time" v-model="close_end_time">
                    <p v-if="errors.close_end_time" style="color:red;"> @{{ errors.close_end_time[0]}}</p>
                  </div>
                </div>

                  <div class="form-group">
                  <label for="status" class="col-sm-3 control-label">Status</label>

                  <div class="col-sm-9">
                    
                    <select class="form-control" id="status" v-model="status">
                        <option selected disabled value='' >Select Status</option>
                      <option value="y" >Enable</option>
                      <option value="n" >Disable</option>
                    </select>
                     <p v-if="errors.status" style="color:red;"> @{{ errors.status[0]}}</p>
                  </div>
                </div>
               
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple " v-on:click="addDelhiGame">Submit</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>