    @extends('adminlte::page')

@section('title', 'Account Statements ')

@section('content_header')
    

     <h1> @if(isset($user)) {{ ucfirst($user->name) }} @else Account Statements  @endif </h1>

   
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-aqua" style="font-size: 15px;"> Points</span>

            <div class="info-box-content">
              <span class="info-box-text"> Current Balance</span>
              <span class="info-box-number">{{ $user->wallet}}</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
       
        <!-- /.col -->

        <!-- fix for small devices only -->
       

      
        <!-- /.col -->
        <!-- <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-yellow">&#x20B9</span>

            <div class="info-box-content">
              <span class="info-box-text">Transfer on your add account</span>
              <span class="info-box-number">0</span>
            </div>
           
          </div>
         
        </div> -->
        <!-- /.col -->
      </div>
      <div class="row">
       
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Account Statements</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="accountStatement" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sr.No.</th>
                
                  <th>Points</th>
                  <th>Balance </th>
                    <th>Message</th>
                  <th>Time</th>
                 
                 
                  
                 
                </tr>
                </thead>
                <tbody>
                  @foreach($accountStatements as $key => $value)
                  <tr class="row-{{ $value->id }}">
                    <td>{{ $loop->index+1 }}</td>
                      
                     <td>{{ $value->amount}} </td>
                     <td>{{ $value->balance}} </td>
                     <td>{!! $value->message !!}</td>
                     <td>{{ date_format(date_create($value->create_time), 'd-M-Y , g:ia' ) }}</td>
                    
                    
                   
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
