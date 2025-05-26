 <div class="modal fade" id="delhiGameViewModal" v-if="delhiGame != null">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"> @{{ delhiGame.title }} </h4>
              </div>
              <div class="modal-body">
               <table class="table">
                 
                  <tbody>
                     <tr>
                      <th>Andar Haruf</th>
                      <td>
                           <span  v-if="delhiGame.open_aakda != null ">@{{ delhiGame.open_aakda }}</span>
                           <span v-else >*</span>
                          
                          </td>
                      </tr>
                      
                      <tr>
                      <th>Bahar Haruf</th>
                     <td>
                          <span  v-if="delhiGame.close_aakda != null ">@{{ delhiGame.close_aakda }}</span>
                           <span v-else >*</span>
                         
                      </tr>
                      
                      <tr>
                      <th>Jodi</th>
                      <td>
                           <span  v-if="delhiGame.close_jodi != null ">@{{ delhiGame.close_jodi }}</span>
                           <span v-else >**</span>
                          </td>
                      </tr>
                      
                      <tr>
                      <th>Andar Haruf End Time</th>
                      <td>@{{ delhiGame.open_end_time  }}</td>
                      </tr>
                      
                      
                      <tr>
                      <th>Bahar Haruf End Time</th>
                       <td>@{{ delhiGame.close_end_time }}</td>
                      </tr>
                      
                       <tr>
                      <th>Andar Haruf Game Status</th>
                      <td>
                     <span style="color:green;" v-if="delhiGame.open_action == 'y'">Enable</span>
                      <span style="color:red;" v-if="delhiGame.open_action == 'n'">Disable</span>
                      </td>
                      </tr>
                      
                      
                      <tr>
                      <th>Bahar Haruf  Game Status</th>
                    <td> 
                    <span style="color:green;" v-if="delhiGame.close_action == 'y'">Enable</span>
                      <span style="color:red;" v-if="delhiGame.close_action == 'n'">Disable</span>
                      </td>
                      </tr>
                      
                      <tr>
                      <th>  Game Status</th> 
                      <td> 
                      <span style="color:green;" v-if="delhiGame.both_action == 'y'">Enable</span>
                      <span style="color:red;" v-if="delhiGame.both_action == 'n'">Disable</span>
                     </td>
                      </tr>
                      
                      
                   
                  </tbody>
                </table>
                   
              </div>
             
            </div>
           
          </div>
         
        </div>