    @extends('adminlte::page')

@section('title', 'AdminLTE')

@section('content_header')
    <h1>Users List</h1>
@stop

@section('content')

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Users List</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table  class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Check</th>
                  <th>Name</th>
                 
                  
                 
                </tr>
                </thead>
                <tbody>
                  @foreach($openKhels as $key => $value)

                  <tr>
                    <td><input type="checkbox" name=""></td>
                     <td>{{ ucfirst($value->user->name)}} </td>
                    
                   
                  </tr>

                 @endforeach

                   <tr>
                    
                     <td colspan="2" style="text-align: right;"><button>Make a payment</button> </td>
                    
                   
                  </tr>
              
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
@stop
