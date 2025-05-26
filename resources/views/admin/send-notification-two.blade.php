@extends('adminlte::page')

@section('title', 'Send Notification')

@section('content_header')
    <h1>Notification </h1>
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
                        <h3 class="box-title"> Notification</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->


<form class="form-horizontal">
    @csrf
              <div class="box-body">


                 <div class="form-group">
                 
             <label for="title" class="col-sm-3 control-label">Select UersId</label>
                  <div class="col-sm-9">
                  <select class="form-control chosenselect" multiple id="member_id" name="member_id[]" style="width: 100%;">
                    <option value="0">All users</option>
                    @foreach($users as $user)
                   <option value="{{ $user->id}}">{{ $user->name}} ({{ $user->username}}) </option>

                   @endforeach
                 
                 
                 
                </select>
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>

             <div class="form-group">
                 <label for="title" class="col-sm-3 control-label">Title</label>

                 <div class="col-sm-9">
                    <input type="text" class="form-control" id="title" placeholder="Title">
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>

             </div>


        
                <div class="form-group">
                  <label for="open_start_time" class="col-sm-3 control-label">message</label>

                  <div class="col-sm-9">
                   <textarea class="form-control" name="message" id="message" placeholder=" Message"></textarea>
                     <p class="open-errors" style="color: red;display: none;"></p>
                  </div>
                </div>


               
              </div>
             
              <div class="box-footer">

                <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Cancel</button>
                <button type="button" class="btn bg-purple sendnotification">Submit</button>
              </div>
             
            </form>





                   <!--  <form class="form-horizontal" action="{{ route('send.notification') }}" method="POST">
                        {{ csrf_field() }}
                        <div class="box-body">


              <div class="form-group">
                <label class="col-sm-2 control-label">UserId </label>
                 <div class="col-sm-10">
                <select class="form-control chosenselect" id="member_id" name="member_id" style="width: 100%;">
                    <option value="0">All users</option>
                    @foreach($users as $user)
                   <option value="{{ $user->id}}">{{ $user->name}} ({{ $user->username}}) </option>

                   @endforeach
                 
                 
                 
                </select>
            </div>
              </div>
     

                            <div class="form-group {{ $errors->has('title') ? ' has-error' : '' }}">
                                <label for="title" class="col-sm-2 control-label">Title</label>

                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="title" id="title" placeholder="title" >
                                    {{--error--}}
                                    @if ($errors->has('title'))
                                        <span class="help-block">
                                    <strong>{{ $errors->first('title') }}</strong>
                                    </span>
                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>


                              <div class="form-group {{ $errors->has('message') ? ' has-error' : '' }}">
                                <label for="message" class="col-sm-2 control-label"> Message</label>

                                <div class="col-sm-10">
                                   
                                    <textarea class="form-control" name="message" id="message" placeholder=" Message"></textarea>
                                    {{--error--}}
                                    @if ($errors->has('message'))
                                        <span class="help-block">
                                    <strong>{{ $errors->first('message') }}</strong>
                                    </span>
                                    @endif
                                    {{--error end--}}
                                </div>
                            </div>

                            <div class="form-group ">
                                <label for="inputPassword3" class="col-sm-2 control-label"></label>

                                <div class="col-sm-10">
                                    <button type="submit" class="btn bg-purple ">Send</button>
                                    
                                </div>
                            </div>

                        </div>

                    </form> -->
                </div>
                <!-- /.box -->

            </div>
            <!--/.col (right) -->
        </div>
        <!-- /.row -->

    </section>
    <!-- /.content -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.1.0/chosen.jquery.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.1.0/chosen.min.css">

<script src="{{asset('chosen/bootstrap-multiselect.js')}}"></script>



<script>
jQuery(document).ready(function(){
jQuery(".chosen").chosen();
});
</script>
<script>

$(function() {
        $('.chosenselect').chosen();
        $('.multiselect').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
      });
</script>

@stop

@section('css')


@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop 