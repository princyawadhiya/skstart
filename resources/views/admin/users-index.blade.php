    @extends('adminlte::page')

@section('title', 'AdminLTE')

@section('content_header')
    <h1>Users List</h1>
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
<div id="modal-show"></div>
 
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Users List</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="users" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Username</th>
                  <th>Full Name</th>
                  <th>Mobile No.</th>
                  <th>Points</th>
                 
                 
                  <th>Action</th>
                  
                 
                </tr>
                </thead>
                <tbody>
                  @foreach($users as $key => $value)
                  <tr>
                    <td>{{ $loop->index+1 }}</td>
                    <td>{{ $value->username }}</td>
                    <td><a href="javascript:void(0)" data-id="{{ $value->id }}" class="user-detail">{{ ucfirst($value->name) }}</a></td>
                    <td> {{ $value->mobile_number }}</td>
                    <td> {{ $value->wallet }}</td>
                   
                   
                    <td>

                      <a href="javascript:void(0)" data-id="{{ $value->id }}" class="pointTransfer-openModal"  > <span class="badge bg-blue">Point Deposit</span> </a>

                      <a href="javascript:void(0)" data-id="{{ $value->id }}" class="pointWithdrawn-modal"  > <span class="badge bg-blue">Point Withdrawn</span> </a>


                      <a href="{{ route('user.biddingHistories',$value->username)}}" target="_blank" >
                        <span class="badge bg-teal">Bidding History</span>

                      </a>

                      <a href="{{ route('user.accountStatement',$value->username)}}" target="_blank" >
                        <span class="badge bg-yellow">Account Statement</span>
                      </a>


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
