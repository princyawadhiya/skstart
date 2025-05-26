@extends('adminlte::page')

@section('title', 'Manage Satta')

@section('content_header')
    <h1>Register User</h1>
@stop

@section('content')
       <!-- Main content -->
    <section class="content">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
        	  @include('admin.partials.msg')
          <!-- general form elements -->
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Register User</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form" method="POST" action="{{ route('register-user.post') }}">
            	@csrf
              <div class="box-body">

              	 <div class="form-group {{ $errors->has('username') ? ' has-error' : '' }}">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" name="username" id="username" placeholder="Usernaame" value="{{ old('username')}}">
                    {{--error--}}
                    @if ($errors->has('username'))
                        <span class="help-block">
                    <strong>{{ $errors->first('username') }}</strong>
                    </span>
                    @endif
                    {{--error end--}}
                 
                </div>


                <div class="form-group {{ $errors->has('full_name') ? ' has-error' : '' }}">
                  <label for="full_name">Full Name</label>
                  <input type="text" class="form-control" name="full_name" id="full_name" placeholder="Full Name" value="{{ old('full_name')}}">
                   {{--error--}}
                    @if ($errors->has('full_name'))
                        <span class="help-block">
                    <strong>{{ $errors->first('full_name') }}</strong>
                    </span>
                    @endif
                    {{--error end--}}
                 
                </div>
                 <div class="form-group {{ $errors->has('mobile_number') ? ' has-error' : '' }}">
                  <label for="mobile_number">Mobile Number</label>
                  <input type="text" class="form-control" name="mobile_number" id="mobile_number" placeholder="Mobile Number" value="{{ old('mobile_number')}}" >
                  {{--error--}}
                    @if ($errors->has('mobile_number'))
                        <span class="help-block">
                    <strong>{{ $errors->first('mobile_number') }}</strong>
                    </span>
                    @endif
                    {{--error end--}}
                 
                </div>

                <div class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" name="email" id="email" placeholder="Email" value="{{ old('email')}}">
                  {{--error--}}
                    @if ($errors->has('email'))
                        <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                    </span>
                    @endif
                    {{--error end--}}
                 
                </div>

                  

                   <div class="form-group {{ $errors->has('password') ? ' has-error' : '' }}">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" name="password" id="password" placeholder="Password" value="{{ old('password')}}">
                  {{--error--}}
                    @if ($errors->has('password'))
                        <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                    {{--error end--}}
                 
                </div>

                  <div class="form-group {{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                  <label for="password_confirmation">Password Confirmation</label>
                  <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Password Confirmation" value="{{ old('password_confirmation')}}">

                  {{--error--}}
                    @if ($errors->has('password_confirmation'))
                    <span class="help-block">
                    <strong>{{ $errors->first('password_confirmation') }}</strong>
                    </span>
                    @endif
                    {{--error end--}}
                 
                </div>

                

                

                
               
             
                
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button type="submit" class="btn bg-purple">Submit</button>
              </div>
            </form>
          </div>
          <!-- /.box -->

        
          <!-- /.box -->




          

        </div>
       




        <!--/.col (right) -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('Hi!'); </script>
    <script src="{{ asset('vendor/adminlte/vendor/jquery/dist/jquery.min.js') }}"></script>
@stop 