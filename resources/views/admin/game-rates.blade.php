@extends('adminlte::page')

@section('title', 'Manage Satta')

@section('content_header')
    <h1>Game Rate</h1>
  
@stop

@section('content')
       <!-- Main content -->
    <section class="content">
      <div class="row">

         <div class="col-md-12">

            @include('admin.partials.msg')
     
          <!-- /.box -->

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Game Rates
               
              </h3>
              <!-- tools box -->
           
              <!-- /. tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body pad">
              <form action="{{ route('gameRate.post')}}" method="POST">
                @csrf
                <textarea class="textarea" name="game_rate" placeholder="Game Rates"
                          style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{!! $gameRate->game_rate !!} </textarea>
                              @if ($errors->has('game_rate'))
                                <span class="help-block">
                                    <strong style="color: red;">{{ $errors->first('game_rate') }}</strong>
                                </span>
                              @endif
<br/> <br/> 
                          <div class="col-md-12">
                            <button type="submit" class="btn btn-primary">Submit</button>
                          </div>
              </form>
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

@section('adminlte_js')
  <script>
  $(function () {
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
   // CKEDITOR.replace('editor1')
    //bootstrap WYSIHTML5 - text editor
  $('.textarea').wysihtml5()
  })
</script>
<script src="{{ asset('vendor/adminlte/vendor/jquery/dist/jquery.min.js') }}"></script>
@stop 