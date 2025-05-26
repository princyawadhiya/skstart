 <div class="modal fade" id="game-add-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Add Game</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
               
              <div class="box-body">
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Game Name</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="game_name" placeholder="Game Name" value="">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                  <div class="form-group">
                  <label for="game_rate" class="col-sm-3 control-label">Game Rate</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="game_rate" placeholder="Game Rate" value="">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                  <div class="form-group">
                  <label for="game_rate" class="col-sm-3 control-label">Game Rate Limit</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="game_rate_limit" placeholder="Game Rate Limit" value="">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                  <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Status</label>

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
                <button type="button" class="btn bg-purple  game-save">Save</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>