@extends('adminlte::page')

@section('title', 'Notice Board / Rules')

@section('content_header')
    <h1>Notice Board / Rules</h1>
  
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
              <h3 class="box-title"> Notice Board / Rules
               
              </h3>
              <!-- tools box -->
           
              <!-- /. tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body pad">
              <form action="{{ route('noticeBoard.post')}}" method="POST">
                @csrf
                <textarea class="textarea" name="notice_board" placeholder="how to play"
                          style="width: 100%; height: 300px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{!! $noticeBoard->notice_board !!} </textarea>
                              @if ($errors->has('notice_board'))
                                <span class="help-block">
                                    <strong style="color: red;">{{ $errors->first('notice_board') }}</strong>
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