@extends('adminlte::page')

@section('title', 'Manage Satta')

@section('content_header')
    <h1>Change Password</h1>
@stop

@section('content')
       <!-- Main content -->
  <section class="content">
        <div class="row">

            <!-- right column -->
            <div class="col-md-12">

              @include('admin.partials.msg')
                <!-- Horizontal Form -->
                <div class="box box-success">
                    <div class="box-header with-border">
                        <h3 class="box-title">Change Password</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->



                    <form class="form-horizontal" action="{{ route('admin.changePassword') }}" method="POST">
                        {{ csrf_field() }}
                        <div class="box-body">



                            <div class="form-group @if(Session::has('NotMatchError'))   has-error @endif {{ $errors->has('current_password') ? ' has-error' : '' }}">
                                <label for="current_password" class="col-sm-2 control-label">Current Password</label>

                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="current_password" id="current_password" placeholder="Current Password" value="{{ old('current_password') }}">
                                    {{--error--}}
                                    @if ($errors->has('current_password'))
                                    <span class="help-block">
                                    <strong>{{ $errors->first('current_password') }}</strong>
                                    </span>
                                    @endif
                                    @if(Session::has('NotMatchError'))
                                        <span class="help-block">
                                        <strong style="color: red;">{{ Session::get('NotMatchError') }}</strong>
                                        </span>

                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>

                            <div class="form-group {{ $errors->has('new_password') ? ' has-error' : '' }}">
                                <label for="new_password" class="col-sm-2 control-label">New Password</label>

                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="new_password" id="new_password" placeholder="New Password" value="{{ old('new_password') }}">
                                    {{--error--}}
                                    @if ($errors->has('new_password'))
                                        <span class="help-block">
                                    <strong>{{ $errors->first('new_password') }}</strong>
                                    </span>
                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>

                            <div class="form-group {{ $errors->has('new_password_confirmation') ? ' has-error' : '' }}">
                                <label for="new_password_confirmation" class="col-sm-2 control-label">Confirm Password</label>

                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="new_password_confirmation" name="new_password_confirmation" placeholder="Confirm Password" value="{{ old('new_password_confirmation') }}">
                                    {{--error--}}
                                    @if ($errors->has('new_password_confirmation'))
                                        <span class="help-block">
                                    <strong>{{ $errors->first('new_password_confirmation') }}</strong>
                                    </span>
                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>

                            <div class="form-group ">
                                <label for="inputPassword3" class="col-sm-2 control-label"></label>

                                <div class="col-sm-10">
                                    <button type="submit" class="btn bg-purple ">Change</button>
                                        <a href="{{ route('home') }}" class="btn btn-default">Go back home</a>

                                </div>
                            </div>

                        </div>

                    </form>
                </div>
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
    <script src="{{ asset('vendor/adminlte/vendor/jquery/dist/jquery.min.js') }}"></script>
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop 