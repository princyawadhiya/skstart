 <div class="modal fade" id="user-detail">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                	{{ucfirst($user->name) }} 

                </h4>
              </div>
              <div class="modal-body">
            
            
            <div class="box-body">
              <!-- open -->
              <div class="col-md-12">
               <!--  <h4 class="box-title">User Detail</h4> -->
               <table class="table table-bordered">
                <tbody>
                  <tr>
                  <th >Full Name</th>
                   <td> {{ ucfirst($user->name) }} </td>
                  
                </tr>
                <tr>
                  <th>Username</th>
                  <td> {{ $user->username }}</td>
                 
                </tr>
                <tr>
                  <th>wallet Points</th>
                 <td> {{ $user->wallet }}</td>
                 
                </tr>
              

                <tr>
                  <th>Mobile Number</th>
                  <td> {{ $user->mobile_number }}</td>
                 
                </tr>

                <tr>
                  <th>Gmail</th>
                 <td> {{ $user->email }}</td>
                 
                </tr>

                

                <tr>
                  <th>Address</th>
                 <td> {{ $user->address }}</td>
                 
                </tr>

                <tr>
                  <th>Bank Name</th>
                 <td> {{ $user->bank_name }}</td>
                 
                </tr>

                <tr>
                  <th>Branch Name</th>
                 <td> {{ $user->bank_name }}</td>
                 
                </tr>

                 <tr>
                  <th>Account Number</th>
                 <td> {{ $user->account_number }}</td>
                 
                </tr>

                  <tr>
                  <th>IFSC</th>
                 <td> {{ $user->ifsc }}</td>
                 
                </tr>
                

                

               
              </tbody>
            </table>
            </div>
          

            </div>
          
         
              </div>
             
            </div>
           
          </div>
         
        </div>

