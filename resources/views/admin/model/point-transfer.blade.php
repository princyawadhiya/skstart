 <div class="modal fade" id="pointTransfer">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{ ucfirst($user->name)}} - Point Deposit</h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
                <input type="hidden" name="" id="user_id" value="{{ $user->id }}">
               
              <div class="box-body">
                 <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Current Points</label>

                  <div class="col-sm-9">
                   <p style="font-size: 30px;">{{ $user->wallet }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Points</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="points" placeholder="Enter Point" value="">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 

                 

              
    
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple  pointTransfer">Deposit</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>