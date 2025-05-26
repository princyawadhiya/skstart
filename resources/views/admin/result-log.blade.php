    @extends('adminlte::page')

@section('title', 'AdminLTE')

@section('content_header')
    <h1>Result Logs</h1>
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
<div id="modal-show"></div>
 
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Result Logs</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="logs" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Title</th>
                  <th colspan="2">Open Pana</th>
                  <th colspan="2">Close Pana</th>
                  <th colspan="2">Result</th>
               
                 
                 </tr>
                </thead>
                <tbody>
                  @foreach($resuldata as $key => $value)
                  <tr class="row-{{$value->id}}">
                     <td>{{ $loop->index+1 }}</td>
                   <td>{{ ucfirst($value->title) }}</td>
                   <td> 
                    @if($value->open_pana != null) 
                     {{$value->open_input_result_date}}/{{  $value->open_pana }}
                        @else 
                      *** 
                    @endif
                   </td>
                   <td> 
                    @if($value->managesatta->open_pana != null) 
                     {{$value->managesatta->open_input_result_date}}/{{  $value->managesatta->open_pana }}
                        @else 
                      *** 
                    @endif
                  </td>
                   <td>
                     @if($value->close_pana != null) 
                     {{$value->close_input_result_date}}/{{ $value->close_pana }}
                     
                        @else 
                      *** 
                    @endif
                   </td>
                   <td> @if($value->managesatta->close_pana != null) 
                    {{$value->managesatta->close_input_result_date}}/ {{ $value->managesatta->close_pana }}
                     
                        @else 
                      *** 
                    @endif</td>
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
                  <td> @if($value->managesatta->open_aakda != null)
                    {{ $value->managesatta->open_aakda  }}
                    @endif
                    @if($value->managesatta->close_aakda != null)
                    {{ $value->managesatta->close_aakda  }}
                   @endif
                   @if( $value->managesatta->open_aakda == null && $value->managesatta->close_aakda == null )
                   <strong>Loading</strong>
                    @endif</td>
                   
                   
                 
                   
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
