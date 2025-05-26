 <div class="modal fade" id="delhiGameRateEdit">
          <div class="modal-dialog" ref="delhiGameRateUpdateformContainer">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"> @{{ delhiGameRate.name  }}</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
                <input type="hidden" name="update_id"  >
              <div class="box-body">
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Game Name</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control"  placeholder="Game Name"  v-model="delhiGameRate.name">
                     <p v-if="errors.name" style="color: red;">@{{ errors.name[0]}}</p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="game_rate" class="col-sm-3 control-label">Game Rate</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="update_game_rate" placeholder="Game Rate" v-model="delhiGameRate.game_rate" >
                      <p v-if="errors.game_rate" style="color: red;">@{{ errors.game_rate[0]}}</p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="game_rate" class="col-sm-3 control-label">Game Rate Limit</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="update_game_rate_limit" placeholder="Game Rate Limit" v-model="delhiGameRate.game_rate_limit"  >
                     <p v-if="errors.game_rate_limit" style="color: red;">@{{ errors.game_rate_limit[0]}}</p>
                  </div>
                </div>

                  <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Status</label>

                  <div class="col-sm-9">
                    
                    <select class="form-control" id="update_status" v-model="delhiGameRate.status" >
                      <option value="y"   >Enable</option>
                      <option value="n"  >Disable</option>
                    </select>
                    <p v-if="errors.status" style="color: red;">@{{ errors.status[0]}}</p>
                  </div>
                </div>
              
    
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple " v-on:click="delhiGameRateUpdate">Update</button>
                
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>