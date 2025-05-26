@extends('adminlte::page')

@section('title', 'Game List')

@section('content_header')
    <h1>Delhi Game Rate</h1>

@stop

@section('content')

    <!-- Main content -->
    <section class="content" id="gameRate">
      <div class="row">
          
        @include('admin.model.delhi-game-rate-edit')
        
        <div class="col-xs-12">
         

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Delhi Game Rate</h3>
            </div>
            
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Game Rate</th>
                  <th>Game Rate Limit</th>
                  <th>Status</th>
                  <th>Action</th>
                 
                  
                 
                </tr>
                </thead>
                <tbody>
             
                  <tr v-if="delhiGameRates.length"  v-for="(delhiGameRate , index) in delhiGameRates">
                    <td> @{{ index+1 }}</td>
                    <td> @{{ delhiGameRate.name }}</td>
                    <td> @{{ delhiGameRate.game_rate }}</td>
                    <td> @{{ delhiGameRate.game_rate_limit }}</td>
                    <td>
                    
                      <strong style="color: green;" v-if="delhiGameRate.status == 'y'">Enable</strong>
                      
                      <strong v-if="delhiGameRate.status == 'n'" style="color: red;">Disable</strong> 
                     
                    </td>
                    <td> 
                   
                    <a href="javascript:void(0)" v-bind:data-id="delhiGameRate.id"  class="" v-on:click="delhiGameRateEdit(delhiGameRate.id , index)"> <span class="badge bg-purple">Edit</span> </a>
                    
                    
                  
                  </td>
                   
                   
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

@section('js')


<script type="text/javascript">
    var app = new Vue({
        el:"#gameRate",
        data:{
            delhiGameRates:[],
            delhiGameRate:'',
            this_index:'',
            errors:[],
            fullPage: false,
        },
        mounted(){
            
            this.getGamesRate();
            
        },
        methods:{
            
            getGamesRate:function(){
                
                 let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                
                axios.get('delhi-games-rates-list').then( response => {
              
                    
                    this.delhiGameRates = response.data.delhiGameRates;
                    loader.hide();
                    
                }).catch((error) => {
                    loader.hide();
                    
                });
            },
            
                /*delhiGame rate edit*/
                delhiGameRateEdit:function(id, index)
                {
                     let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                
                    
                    axios.get('delhi-game-rate-edit',{
                        params:{
                            id:id
                        }
                    }).then( response => {
                         this.this_index = index;
                         this.delhiGameRate = response.data.delhiGameRate;
                         loader.hide();
                        $("#delhiGameRateEdit").modal("show");
                        
                        
                    }).catch((error) => {
                        loader.hide();
                        
                    });
                   
                },
                
                /*delhi game update*/
                
                delhiGameRateUpdate:function()
                {
                     let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.delhiGameRateUpdateformContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                
                
                    
                    const formData = new FormData();
                    formData.append('id',this.delhiGameRate.id);
                    formData.append('name',this.delhiGameRate.name);
                    formData.append('game_rate',this.delhiGameRate.game_rate);
                    formData.append('game_rate_limit',this.delhiGameRate.game_rate_limit);
                    formData.append('status',this.delhiGameRate.status);
                    
                    this.errors = [];
                    
                    axios.post('delhi-game-rate-update',formData).then( response => {
                        
                        this.delhiGameRates.splice(this.this_index,1,response.data.delhiGameRate)
                        this.delhiGameRate = '';
                        this.this_index = '';
                        this.errors= [];
                         this.$toaster.success('Updated successfully..');
                        
                        
                        loader.hide();
                         $("#delhiGameRateEdit").modal("hide");
                        
                    }).catch((error) => {
                        
                        this.errors = error.response.data.errors;
                         this.$toaster.error('Fill all reuired field.')
                          loader.hide()
                        
                    });
                    
                }
                
            
        }
        
    });
</script>
<script src="{{ asset('vendor/adminlte/vendor/jquery/dist/jquery.min.js') }}"></script>
@stop
