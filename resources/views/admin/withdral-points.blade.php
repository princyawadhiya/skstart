    @extends('adminlte::page')

@section('title', 'Request For Points')

@section('content_header')
    <h1>Request for withdral points</h1>
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
<div id="modal-show"></div>
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Request for  withdral points</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Username</th>
                  <th> Name</th>
                  <th>Status</th>
                  <th>Points</th>
                 
                 
                  <th>Action</th>
                  
                 
                </tr>
                </thead>
                <tbody>
                  @foreach($withdralPoints as $key => $value)
                  <tr class="row-{{ $value->id }}">
                    <td>{{ $loop->index+1 }}</td>


                    <td>{{ $value->user->username }}</td>
                    <td>{{ ucfirst($value->user->name) }}</td>
                    <td> @if($value->type == 'r')
                     <strong>Request For Points</strong>
                       @elseif($value->type == 'a')
                        <strong style="color: green;">Request Accepted </strong>
                         @elseif($value->type == 'c')
                         <strong style="color: red;">Request Decline</strong>
                         <p>{{ $value->message  }}</p>
                          @elseif($value->type == 'd')
                         <strong style="color: green;">Withdrawal Successfully.</strong>
                        
                        @endif</td>
                    <td> {{ $value->amount }}</td>
                   
                   
                    <td>

                    
                     <!-- <a href="javascript:void(0)" data-id="{{ $value->id }}" class="point-request"  > <span class="badge bg-blue">Action</span> </a> -->

                     

                      <a href="javascript:void(0)" data-id="{{ $value->user_id }}" data-request-id="{{ $value->id }}" class="pointRequestWithdrawn-modal"  > <span class="badge bg-blue">Point Withdrawn</span> </a>

                     <!--   <a href="javascript:void(0)" data-id="{{ $value->id}}"  class="point-request-delete"> <span class="badge bg-red">Delete</span> </a> -->
                    


                    </td>
                   
                  </tr>

                 @endforeach
              
                </tbody>
            
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
    <script src="{{ asset('vendor/adminlte/vendor/jquery/dist/jquery.min.js') }}"></script>
@stop
