 <div class="modal fade" id="bidding-edit-modal">


          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Bidding Edit </h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
                <input type="hidden" name="update_id" id="update_id" value="{{ $bidding->id }}">
                <input type="hidden" name="oldmessage" id="oldmessage" value="{{$bidding->message}}">


              <div class="box-body">

                <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Name</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="" placeholder=" Name" readonly="readonly" value="{{ $bidding->user->name }}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>


                      <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Current  Points</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control"  placeholder=" Enter Points"  value="{{ $user->wallet }}" readonly="readonly">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                     <div class="form-group">
                  <label for="title" class="col-sm-3 control-label">Bidd Points</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="points" placeholder=" Enter Points"  value="{{ $bidding->amount }}" readonly="readonly">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
    


                  <div class="form-group">
                  <label for="change_point" class="col-sm-3 control-label">Change Points</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="change_point" placeholder=" Enter Change Point"  value="{{$bidding->amount}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

                 <div class="form-group">
                  <label for="change_digit" class="col-sm-3 control-label">Change digit</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="change_digit" placeholder=" Enter Change Digit"  value="{{$bidding->digit}}">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message" class="col-sm-3 control-label">Change Bidding Massege</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" value="{{$bidding->message}}" id="message"  value="">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
    
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple  bidding-update">Update</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>