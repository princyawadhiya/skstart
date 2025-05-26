 <div class="modal fade" id="stargame-rate-edit-model">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Edit Game</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
                <input type="hidden" name="update_id" id="update_id" value="{{ $game->id }}">
              <div class="box-body">
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Game Name</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="update_game_name" placeholder="Game Name" value="{{ $game->name}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="game_rate" class="col-sm-3 control-label">Game Rate</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="update_game_rate" placeholder="Game Rate" value="{{ $game->game_rate}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="game_rate" class="col-sm-3 control-label">Game Rate Limit</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="update_game_rate_limit" placeholder="Game Rate Limit" value="{{ $game->game_rate_limit}}" >
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                  <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Status</label>

                  <div class="col-sm-9">
                    
                    <select class="form-control" id="update_status">
                      <option value="y" @if($game->status == 'y') selected @endif  >Enable</option>
                      <option value="n" @if($game->status == 'n') selected @endif >Disable</option>
                    </select>
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
              
    
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple  stargame-rate-update">Update</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>