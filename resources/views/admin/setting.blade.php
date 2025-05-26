@extends('adminlte::page')

@section('title', 'Setting')

@section('content_header')
    <h1>Setting</h1>
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
                        <h3 class="box-title"> Setting</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->



                    <form class="form-horizontal" action="{{ route('setting.post') }}" method="POST">
                        {{ csrf_field() }}
                        <div class="box-body">



                          <!--   <div class="form-group {{ $errors->has('assistance_number') ? ' has-error' : '' }}">
                                <label for="assistance_number" class="col-sm-2 control-label">Assistance Number </label>

                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="assistance_number" id="assistance_number" placeholder="Assistance Number" value="{{ $setting->assistance_number }}">
                                    {{--error--}}
                                    @if ($errors->has('assistance_number'))
                                    <span class="help-block">
                                    <strong>{{ $errors->first('assistance_number') }}</strong>
                                    </span>
                                    @endif
                                
                                    {{--error end--}}
                                </div>
                            </div> -->

                            <div class="form-group {{ $errors->has('whatsapp_number') ? ' has-error' : '' }}">
                                <label for="whatsapp_number" class="col-sm-2 control-label">Whatsapp Number</label>

                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="whatsapp_number" id="whatsapp_number" placeholder="Whatsapp Number" value="{{ $setting->whatsapp_number }}">
                                    {{--error--}}
                                    @if ($errors->has('whatsapp_number'))
                                        <span class="help-block">
                                    <strong>{{ $errors->first('whatsapp_number') }}</strong>
                                    </span>
                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>


                              <div class="form-group {{ $errors->has('message') ? ' has-error' : '' }}">
                                <label for="message" class="col-sm-2 control-label"> Message</label>

                                <div class="col-sm-10">
                                   
                                    <textarea class="form-control" name="message" id="message" placeholder=" Message" >{{ $setting->message }}</textarea>
                                    {{--error--}}
                                    @if ($errors->has('message'))
                                        <span class="help-block">
                                    <strong>{{ $errors->first('message') }}</strong>
                                    </span>
                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>

                             <div class="form-group {{ $errors->has('game_status') ? ' has-error' : '' }}">
                                <label for="game_status" class="col-sm-2 control-label"> Game Status</label>

                                <div class="col-sm-10">
                                    <select name="game_status" id="game_status"  class="form-control">
                                        <option @if($setting->game_status == 'y') selected @endif value="y">Enable</option>
                                        <option value="n" @if($setting->game_status == 'n') selected @endif >Disable</option>
                                    </select>
                                    <strong style="color: red;">If you disable all game will be disable.</strong>
                                   
                                    {{--error--}}
                                    @if ($errors->has('game_status'))
                                    <span class="help-block">
                                    <strong>{{ $errors->first('game_status') }}</strong>
                                    </span>
                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>

                       

                            <div class="form-group ">
                                <label for="inputPassword3" class="col-sm-2 control-label"></label>

                                <div class="col-sm-10">
                                    <button type="submit" class="btn bg-purple ">Update</button>
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