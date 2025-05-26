 <div class="modal fade" id="satta-view">
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
              <div class="col-md-6">
                <h4 class="box-title">Open Game</h4>
               <table class="table table-bordered">
                <tbody>
                  <tr>
                  <th >Open Pana</th>
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
                  <th>Game Start Time</th>
                  <td>{{ date('h:i A', strtotime($manageSatta->open_start_time))}} </td>
                 
                </tr>

                <tr>
                  <th>Game End Time</th>
                  <td>{{ date('h:i A', strtotime($manageSatta->open_end_time))}} </td>
                 
                </tr>

               
              </tbody>
            </table>
            </div>
            <!-- close -->
              <div class="col-md-6">
                 <h4 class="box-title">Close Game </h4>

              <table class="table table-bordered">
                <tbody>
                  <tr>
                  <th >Close Pana</th>
                  <td>
                    @if($manageSatta->close_pana != null)
                    {{ $manageSatta->close_pana}} 
                    @else
                    ***
                    @endif
                  </td>
                  
                </tr>
                <tr>
                  <th>Close Aakda</th>
                 <td>
                   @if($manageSatta->close_aakda != null)
                    {{ $manageSatta->close_aakda}} 
                    @else
                    *
                    @endif
                 
                </td>
                 
                </tr>
                 <tr>
                  <th>Close jodi</th>
                  <td>
                   
                     @if($manageSatta->close_jodi != null)
                    {{ $manageSatta->close_jodi}}
                    @else
                    **
                    @endif 
                  </td>
                 
                </tr>

               <tr>
                  <th>Game Start Time</th>
                  <td>{{ date('h:i A', strtotime($manageSatta->close_start_time))}} </td>
                 
                </tr>

                <tr>
                  <th>Game End Time</th>
                  <td>{{ date('h:i A', strtotime($manageSatta->close_end_time))}} </td>
                 
                </tr>

               
              </tbody>
            </table>
            </div>

            </div>
          
         
              </div>
             
            </div>
           
          </div>
         
        </div>

