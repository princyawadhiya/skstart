 <table  class="table table-bordered ">
                                <thead>
                      <tr>
                  <th>Sr.No.</th>
                  <th>Game Played</th>
                  <th>Username</th>
                  
                  <th>Message</th>
                  <th>  Points</th>
                
                  <th> Result </th>
                  <th> Payable Points </th>
                 
                 
                 
                  <th>Date & Time</th>
                   <th> Action </th>
                  
                 
                 
                  
                 
                </tr>
                                </thead>
                               <tbody>
                    @if(count($biddingHistories) > 0)
                  @foreach($biddingHistories as $key => $value)
                  <tr>
                    <td>{{ $loop->index+1 }}</td>
                    <td>{{$value->manageSatta->title}}</td>
                    <td>{{ $value->user->username }} ({{ ucfirst($value->user->name) }})</td>
                   
                    <td>{{ $value->message}}</td>
                    <td>{{ $value->amount}} </td>
                   
                    <td>
                      @if($value->result_status == "Won")
                      <strong style="color: green;">{{ ucfirst($value->result_status) }} </strong>
                      @elseif($value->result_status == "Loss")
                     <strong style="color: red;"> {{ ucfirst($value->result_status) }}</strong> 
                       @elseif($value->result_status == "Returned Point")
                     <strong style="color: green;"> {{ ucfirst($value->result_status) }}</strong>
                      @else
                      <strong>Loading..</strong>
                      @endif
                    </td>
                    <td>
                       @if($value->result_status == "Won")
                       {{ $value->payable_amount }}
                        @elseif($value->result_status == "Loss")
                        {{ $value->payable_amount }}
                        @elseif($value->result_status == "Returned Point")
                        {{ $value->payable_amount }}
                         @else
                      <strong>Loading..</strong>
                      @endif </td>
                    
                    
                     
                    
                    
                     <td>{{   date_format(date_create($value->create_time), 'd-M-Y , g:ia' ) }}</td>
                     <td>
                         @if($value->result_status != "Won" && $value->result_status != "Loss" && $value->result_status != "Returned Point"  )
                         <a href="javascript:void(0)" data-id="{{ $value->id }}" class="bidding-edit"><span class="badge bg-light-blue">Edit</span></a>
                         
                         @endif
                         
                         @if($value->result_status != "Won" && $value->result_status != "Loss" && $value->result_status != "Returned Point"  )
                         
                         <a   href="javascript:void(0)" data-id="{{ $value->id }}" class="return-point"><span class="badge .bg-green-active">Returned Point</span></a>
                         
                         @endif
                         
                     </td>

                    
                    
                   
                  </tr>

                 @endforeach
                 
                 @else
                 <tr>
                     <td colspan="8" class="text-center">No Record Found.</td>
                     </tr>
                     
                     @endif
                     
              
                </tbody>

                            </table>