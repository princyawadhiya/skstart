 <div class="modal fade" id="star-view">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                	{{ucfirst($manageSatta->title) }} 

                </h4>
              </div>
              <div class="modal-body">
            
            
            <div class="box-body">
              <!-- open -->
              <div class="col-md-12">
               
               <table class="table table-bordered">
                <tbody>
                  <tr>
                  <th> Pana</th>
                   <td>
                     @if($manageSatta->open_pana != null)
                   {{ $manageSatta->open_pana}}
                    @else
                    ***
                    @endif 
                    
                     </td>
                  
                </tr>
                <tr>
                  <th>Open Aakda</th>
                  <td>
                    @if($manageSatta->open_aakda != null)
                  {{ $manageSatta->open_aakda}} 
                    @else
                    *
                    @endif 
                    
                  </td>
                 
                </tr>
              

                <tr>
                  <th>Game  Time</th>
                  <td>{{ date('h:i A', strtotime($manageSatta->open_end_time))}} </td>
                 
                </tr>

                <tr>
                  <th>Game End Time</th>
                  <td>{{ date('h:i A', strtotime($manageSatta->open_end_time))}} </td>
                 
                </tr>
                 <tr>
                  <th>Game Status</th>
                  <td> @if($manageSatta->status == 'y')
                      <strong style="color: green;">Enable</strong>
                      @elseif($manageSatta->status == 'n')
                      <strong style="color: red;">Disable</strong> 
                      @endif
                    </td>
                 
                </tr>
              </tbody>
            </table>
            </div>
            </div>
          
         
              </div>
             
            </div>
           
          </div>
         
        </div>

