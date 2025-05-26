@extends('adminlte::page')

@section('title', 'Enquery Section ')

@section('content_header')
    <h1> @if(isset($user)) {{ ucfirst($user->name) }} @else Enquery Section  @endif </h1>

   
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div id="model-show"></div>
       
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title"> Enquery Section</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="biddinghistories" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Username</th>
                  
                  <th>Mobile Number</th>
                
                 
                  <th>Comment</th>
                 
                  <th>Date & Time</th>
                       <th> Action </th>
                  
                 
                 
                  
                 
                </tr>
                </thead>
                <tbody>
                  @foreach($enquery as $key => $value)
                  <tr class="row-{{ $value->id }}">
                    <td>{{ $loop->index+1 }}</td>
                    <td>{{ $value->name }}</td>
                   
                    <td>{{ $value->mobile_number}}</td>
                    <td>{{ $value->comment}} </td>
                   
                    
                     <td>{{   date_format(date_create($value->created_at), 'd-M-Y , g:ia' ) }}</td>
                         <td><a href="javascript:void(0)" data-id="{{ $value->id }}" class="delete-enquery"><span class="badge bg-light-blue">Delete</span></a></td>

                    
                    
                   
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
