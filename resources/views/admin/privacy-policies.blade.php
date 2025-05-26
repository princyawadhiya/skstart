@extends('adminlte::page')

@section('title', 'Privacy Policies')

@section('content_header')
    <h1>Privacy Policies</h1>
  
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
              <h3 class="box-title">Privacy Policies
               
              </h3>
              <!-- tools box -->
           
              <!-- /. tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body pad">
              <form action="{{ route('privacyPolicies.post')}}" method="POST">
                @csrf
                <textarea class="textarea" name="privacy_police" placeholder="Privacy Police."
                          style="width: 100%; height: 350px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{!! $privacyPolicies->privacy_police !!} </textarea>
                              @if ($errors->has('privacy_police'))
                                <span class="help-block">
                                    <strong style="color: red;">{{ $errors->first('privacy_police') }}</strong>
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