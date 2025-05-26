 <div class="modal fade" id="pointRequest">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{ ucfirst($user->name)}} </h4>
              </div>
              <div class="modal-body">
               <form class="form-horizontal">
                <input type="hidden" name="" id="update_id" value="{{ $pointRequest->id }}">
                <input type="hidden" name="" id="option_val" @if($pointRequest->type == 'c') value="c" @elseif($pointRequest->type == 'a') value="a" @elseif($pointRequest->type == 'r') value="" @endif >
               
              <div class="box-body">
                <div class="col-md-12">
                 <div class="form-group">
                  <div class="radio">
                    <label>
                      <input type="radio" class="option" name="optionsRadios" id="accepte" value="a"  @if($pointRequest->type == 'a') checked="" @endif >
                     Accepte
                    </label>
                  </div>
                  <div class="radio">
                    <label> 
                      <input type="radio" class="option" name="optionsRadios" id="cancel" value="c" @if($pointRequest->type == 'c') checked="" @endif>
                     Cancel
                    </label>

                  </div>

                 
                </div>
                </div>

                <div id="reason_div"  @if($pointRequest->type == 'c')  @else style="display: none;" @endif >
                  <div class="form-group">
                 

                  <div class="col-sm-12">
                   <textarea class="form-control" id="reason" placeholder="Enter Reason">{{ $pointRequest->message}}</textarea>
                   <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>
                </div>
                
              

                 

                 

              
    
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple  request-point-post">Submit</button>
              </div>
             
            </form>
              </div>
             
            </div>
           
          </div>
         
        </div>