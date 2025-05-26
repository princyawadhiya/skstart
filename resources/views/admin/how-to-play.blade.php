@extends('adminlte::page')

@section('title', 'How To Play')

@section('content_header')
    <h1>How To Play</h1>
  
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
              <h3 class="box-title">How To Play
               
              </h3>
              <!-- tools box -->
           
              <!-- /. tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body pad">
              <form action="{{ route('howToPlay.post')}}" method="POST">
                @csrf
                <textarea class="textarea" name="how_to_play" placeholder="how to play"
                          style="width: 100%; height: 500px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{!! $howToPlay->how_to_play !!} </textarea>
                              @if ($errors->has('how_to_play'))
                                <span class="help-block">
                                    <strong style="color: red;">{{ $errors->first('how_to_play') }}</strong>
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