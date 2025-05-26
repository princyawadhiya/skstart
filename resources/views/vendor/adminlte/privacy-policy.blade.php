@extends('adminlte::master')

@section('adminlte_css')
    <link rel="stylesheet" href="{{ asset('vendor/adminlte/css/auth.css') }}">
    @yield('css')
@stop

@section('body_class', 'register-page')

@section('body')

    <div class="container-fluid">
        <div class="register-logo">
            <div class="row">
                <div class="col-md-8 text-center" >
                     <a href="javascript:void(0)"><h2 style="margin-left: 400px;">Privacy Policies</h2></a>
                </div>
                <div class="col-md-4" >
                      <a  href="{{ url(config('adminlte.dashboard_url', 'home')) }}" class="btn btn-primary " style="color: white;">Go On Login</a>
                </div>
               </div>
            
          
        </div>

        <div class="register-box-body">
      <div class="row">
          <div class="col-md-2"></div>
      <div class="col-md-8">
           {!! $privacyPolicies->privacy_police !!}
      </div>
      <div class="col-md-2"></div>
      </div>
        </div>
        <!-- /.form-box -->
    </div><!-- /.register-box -->
@stop

@section('adminlte_js')
    @yield('js')
@stop
