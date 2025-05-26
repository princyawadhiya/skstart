@extends('adminlte::page')

@section('title', 'Bidding Histories ')

@section('content_header')
    <h1> @if(isset($user)) {{ ucfirst($user->name) }} @else Bidding Histories  @endif </h1>

   
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div id="model-show"></div>
       
        <div class="col-xs-12">
         
<section id="searchUser">
          <div class="box">
              
            <div class="box-header">
              <form method="POST" action="{{ route('searchbid.game')}}">
                <div class="col-md-4">
             
  
             @csrf
              <div class="form-group">
                        <select name="game_id" required="" id="game_id" class="form-control" required>
                          @if($game_id == null)
                        <option value="">Select game</option>
                          @else
                       <option value="{{$game_id}}">{{$game_name->title}}</option>
                          @endif
                            
                            @foreach($managesSatta as $data)

                            <option value="{{ $data->id }}">{{ $data->title }}</option>

                            @endforeach
                        </select>
                    </div>
                    
                    
                 
                   
            </div>
                <div class="col-md-4">
                    <input type="submit" class="btn-btn" value="submit">
                </div>

                 </form>
           <div class="col-md-4">
                    <div><p><strong>Search By</strong> - game name  </p>
                                    <input class="form-control" type="text" v-model="search_key" v-on:keyup="srarchUser"  placeholder="Search">
                                    
                                </div> 
                   
               </div>
               </div>
            <!-- /.box-header -->
            <div class="box-body">
                 <div v-if="html_result.length" v-html="html_result"></div>
                <div v-if="html_result.length == 0">
              <table  class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Game played </th>
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
                  <tr class="row-{{ $value->id }}">
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
              </div>
              
             {{ $biddingHistories->render() }}
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
          </section>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>

<script src="{{ asset('vendor/adminlte/vendor/jquery/dist/jquery.min.js') }}"></script>

<script src="{{ URL::asset('js/newvue.js') }}"></script>
@stop


