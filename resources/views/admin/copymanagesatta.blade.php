@extends('adminlte::page')

@section('title', 'Manage Satta')

@section('content_header')
    <h1>Manage Satta</h1>
    <br/>
     <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-default">
                Add Satta
     </button>
@stop

@section('content')
       <!-- Main content -->
    <section class="content" ref="formContainer">
      <div class="row">

        @include('admin.model.satta-add')

        <div id="game-model-show"></div>

       
<div class="col-md-12">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">Manage Satta</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <tbody>


                  <tr>
                  <th style="width: 10px">#</th>
                  <th>Title</th>
                  <th>Open Pana</th>
                  <th>Close Pana</th>
                  <th>Result</th>
                   <th>Game Status</th>
                  <th> Pana Update</th>
                 
                  <th>Action </th>
                 
                 </tr>
                @foreach($managesSatta as $key => $value)
                 <tr class="row-{{$value->id}}">
                  <td>{{ $loop->index+1 }}</td>
                   <td>{{ ucfirst($value->title) }}</td>
                   <td> 
                    @if($value->open_pana != null) 
                     {{  $value->open_pana }}
                        @else 
                      *** 
                    @endif
                   </td>
                   <td>
                     @if($value->close_pana != null) 
                     {{ $value->close_pana }}
                     
                        @else 
                      *** 
                    @endif
                   </td>
                   <td> 
                    @if($value->open_aakda != null)
                    {{ $value->open_aakda  }}
                    @endif
                    @if($value->close_aakda != null)
                    {{ $value->close_aakda  }}
                   @endif
                   @if( $value->open_aakda == null && $value->close_aakda == null )
                   <strong>Loading</strong>
                    @endif
                  </td>
                       <td>
                      @if($value->status == 'y')
                      <strong style="color: green;">Enable</strong>
                      @elseif($value->status == 'n')
                      <strong style="color: red;">Disable</strong> 
                      @endif
                    </td>
                   <td>
                    <a href="javascript:void(0)" data-flag="open" data-id="{{ $value->id}}" class="game-modal"> <span class="badge bg-teal">Open</span> </a> | 
                    <a href="javascript:void(0)" data-flag="close" data-id="{{ $value->id}}" class="game-modal">
                      <span class="badge bg-blue">Close</span>
                     
                  </a>
                </td>
                   <td>
                    <a href="javascript:void(0)" data-id="{{ $value->id}}"  class="satta-view"> <span class="badge bg-yellow">View</span> </a>
                    |
                    <a href="javascript:void(0)" data-id="{{ $value->id}}"  class="satta-edit"> <span class="badge bg-light-blue">Edit</span> </a>
                  <!--   | 
                    <a href="javascript:void(0)" data-id="{{ $value->id}}"  class="satta-delete"> <span class="badge bg-red">Delete</span> </a> -->
                  </td>
                   
                 </tr>
                 @endforeach
               

              </tbody></table>
            </div>
          
          </div>
          

         
        </div>


          

        </div>
      


    </section>
    <!-- /.content -->
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop 