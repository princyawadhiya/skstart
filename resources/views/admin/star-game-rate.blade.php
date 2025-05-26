@extends('adminlte::page')

@section('title', 'Game List')

@section('content_header')
    <h1>Star Line Game List</h1>
    <!--  <br/>
     <button type="button" class="btn btn-success" data-toggle="modal" data-target="#game-add-modal">
                Add Game Rate
              </button> -->
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div id="game-model-show"></div>
        @include('admin.model.game-add')
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Game List</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Game Rate</th>
                  <th>Game Rate Limit</th>
                  <th>Status</th>
                  <th>Action</th>
                 
                  
                 
                </tr>
                </thead>
                <tbody>
                  @foreach($games as $key => $value)
                  <tr class="row-{{ $value->id }}">
                    <td>{{ $loop->index+1 }}</td>
                    <td>{{ ucfirst($value->name) }}</td>
                    <td> &#x20B9 {{ $value->game_rate }}</td>
                    <td> &#x20B9 {{ $value->game_rate_limit }}</td>
                    <td>
                      @if($value->status == 'y')
                      <strong style="color: green;">Enable</strong>
                      @elseif($value->status == 'n')
                      <strong style="color: red;">Disable</strong> 
                      @endif
                    </td>
                    <td> 
                   
                    <a href="javascript:void(0)" data-id="{{ $value->id}}"  class="stargame-rate-edit"> <span class="badge bg-light-blue">Edit</span> </a>
                    
                    
                   <!--  | 
                    <a href="javascript:void(0)" data-id="{{ $value->id}}"  class="game-delete"> <span class="badge bg-red">Delete</span> </a> -->
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
