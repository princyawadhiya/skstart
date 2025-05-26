@extends('adminlte::page')

@section('title', 'Manage Delhi Games')

@section('content_header')
    <h1>Manage Delhi Games</h1>
    

@stop

@section('content')
       <!-- Main content -->
    <section class="content" id="delhiGame">
      <div class="row">
          <div class="col-md-12">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">Manage Delhi Games</h3>
                   <button type="button" class="btn bg-purple pull-right" v-on:click="delhiGameOpenModel" >
                Add Delhi Games
     </button>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
               
              <table class="table table-bordered">
                <tbody>


                  <tr>
                  <th style="width: 10px">#</th>
                  <th>Title</th>
                  <th>Andar Haruf</th>
                  <th>Jodi </th>
                  <th>Bahar Haruf </th>
                  <th>Result</th>
                   <th>Game Status</th>
                  
                 
                  <th>Action </th>
                 
                 </tr>
                 <tr v-for="(delhiGame , index) in delgiGames">
                     <td> @{{ index+1 }}</td>
                     <td>@{{  delhiGame.title}} </td>
                     <td> 
                     <span v-if="delhiGame.open_aakda != null"> @{{  delhiGame.open_aakda}} </span>
                     <span v-if="delhiGame.open_aakda == null">* </span> 
                     </td>
                     <td>
                       <span v-if="delhiGame.close_jodi != null"> @{{  delhiGame.close_jodi}} </span>
                     <span v-if="delhiGame.close_jodi == null">** </span> 
                     </td>
                     <td>
                        
                         <span v-if="delhiGame.close_aakda != null"> @{{  delhiGame.close_aakda}} </span>
                     <span v-if="delhiGame.close_aakda == null">* </span>
                         </td>
                     <td> 
                     <span v-if="delhiGame.close_jodi != null">@{{  delhiGame.close_jodi}}</span> 
                     <span v-if="delhiGame.close_jodi == null">Loading..</span> 
                     </td>
                     <td > 
                     <a href="javascript:void(0)" style="color:green;" v-if="delhiGame.status == 'y'">Enable </a> 
                      <a href="javascript:void(0)" style="color:red;" v-if="delhiGame.status == 'n'">Disable </a> 
                     </td>
                     <td>
                           <div class="btn-group ">
                  <button type="button" class="btn bg-purple  btn-flat">Action</button>
                  <button type="button" class="btn bg-purple  btn-flat dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li> <a v-on:click="delhiGameResultUpdate(delhiGame.id,index)" href="javascript:void(0)" v-bind:data-id="delhiGame.id" class="btn btn-block bg-purple  btn-xs " style="color: white;"  > Result Update </a></li>
                    <li class="divider"></li>
                    
                    <li> <a href="javascript:void(0)" v-bind:data-id="delhiGame.id" v-on:click="delhiGameView(delhiGame.id,index)" class="btn btn-block bg-purple  btn-xs " style="color: white;"  > View Detail</a></li>
                    <li class="divider"></li>
                    
                    <li> <a href="javascript:void(0)" v-bind:data-id="delhiGame.id" class="btn btn-block bg-purple  btn-xs " style="color: white;"  v-on:click="gameEdit(delhiGame.id,index)" >Game  Update </a></li>
                   
                  </ul>
                </div>
                    </td>
                 </tr>
                
               

              </tbody></table>
            </div>
          
          </div>
          

         
        </div>

         @include('admin.model.delhi-games')
          @include('admin.model.delhi-games-view')
          @include('admin.model.delhi-game-edit')
          @include('admin.model.delhi-game-result-update')
       

       



          

        </div>
      


    </section>
    <!-- /.content -->
     <script src="{{ asset('vendor/adminlte/vendor/jquery/dist/jquery.min.js') }}"></script>
@stop

@section('css')
   
@stop

@section('js')



</script>


    <script type="text/javascript">
        var delhiGame = new Vue({
            el:"#delhiGame",
            data:{
                delgiGames:[],
                delhiGame:'',
                title:'',
                open_end_time:'',
                close_end_time:'',
                status:'',
                open_action:'',
                close_action:'',
                this_index:'',
                errors:[],
                pana:'',
                open_input_result_date:'',
                fullPage: false,
                isLoading: false,
                
            },
            mounted(){
                
                
                this.getDelhiGames();
                
            },
            methods:{
                delhiGameOpenModel:function(){
                
                 
                    $('#delhiGameModal').modal('show');
                },
                addDelhiGame:function(){
                    
                    
                     let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.addDelhiGameformContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                    
                    const formData = new FormData();
                    formData.append('title',this.title);
                    formData.append('open_end_time',this.open_end_time);
                    formData.append('close_end_time',this.close_end_time);
                    formData.append('status',this.status);
                    this.errors = [];
                    
                    axios.post('add-delhi-games',formData).then( response => {
                        
                        if(response.data.status = true)
                        {
                            $('#delhiGameModal').modal('hide');
                            this.$toaster.success('Delhi Game Added successfully..');
                            this.delgiGames.push(response.data.delhiGame);
                            
                            this.title = '';
                            this.open_end_time = '';
                            this.close_end_time = '';
                            this.status = '';
                            this.errors = [];
                            
                              loader.hide()
                            
                            
                            
                        }
                        
                        
                    }).catch((error) => {
                        
                         
                         if( error.response.data.errors)
                         {
                             this.$toaster.error('Fill all reuired field.')
                            this.errors = error.response.data.errors; 
                              loader.hide()
                         }
                        
                    });
                    
                },
                
                getDelhiGames:function(){
                    
                       let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                    
                    axios.get('get-delhi-games').then( response => {
                        
                        this.delgiGames = response.data.delgiGames;
                        loader.hide()
                       
                        
                    }).catch((error) => {
                        loader.hide()
                        
                        
                       
                        
                    });
                },
                
                /*view*/
                delhiGameView:function(gameId,index){
                    
                    let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                    
                  
                     this.delhiGame = '';
                    
                    
                    
                    axios.get('delhi-games-view',{
                        params:{
                        gameId:gameId
                    }
                        
                    }).then( response => {
                        
                        
                        this.delhiGame = response.data.delhiGame;
                         $("#delhiGameViewModal").modal("show");
                         
                         loader.hide()
                       
                        
                    }).catch((error) => {
                        
                    });
                    
                   
                    
                    
                    
                },
                
                gameEdit:function(gameId, index){
                    
                     let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                    
                    
                    
                    this.delhiGame = '';
                    this.this_index = index;
                    this.errors = [];
                    
                    axios.get('game-edit',{
                        params:{
                            gameId:gameId
                            
                        }
                        
                    }).then( response => {
                        
                        this.delhiGame = response.data.delhiGame;
                        $("#delhiGameEditModal").modal("show");
                        
                        loader.hide()
                        
                    }).catch((error) => {
                        
                    });
                    
                },
                
                updateDelhiGame:function()
                {
                    
                    let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.delhiGameEditformContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                    
                   
                    
                    const formData = new FormData();
                    
                    formData.append('gameId',this.delhiGame.id);
                    formData.append('title',this.delhiGame.title);
                    formData.append('open_end_time',this.delhiGame.open_end_time);
                    formData.append('close_end_time',this.delhiGame.close_end_time);
                    formData.append('open_action',this.delhiGame.open_action);
                    formData.append('close_action',this.delhiGame.close_action);
                    formData.append('status',this.delhiGame.status);
                    this.errors = []
;                     
                    axios.post('delhi-game-update',formData).then( response => {
                        
                        this.$toaster.success('Updated successfully..');
                        $("#delhiGameEditModal").modal("hide");
                        this.delgiGames.splice(this.this_index,1,response.data.delhiGame);
                        this.delhiGame = '';
                        this.errors = [];
                        this.this_index = '';
                        
                        loader.hide()
                        
                        
                        
                    }).catch((error) => {
                        this.errors = error.response.data.errors;
                         loader.hide()
                        
                    })
                    
                },
                
                delhiGameResultUpdate:function(gameId, index){
                    
                    let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                   canCancel: false,
                  onCancel: this.onCancel,
                  
                 
                });
                    
                    
                    
                    this.this_index = index;
                     this.delhiGame = '';
                    
                    axios.get('get-game-result-update',{
                        params:{
                            gameId:gameId
                        }
                    }).then( response => {
                        
                        this.delhiGame = response.data.delhiGame;
                        
                        $("#delhiGameResultModal").modal("show");
                        loader.hide()
                        
                    }).catch((error) => {
                        
                    });
                    
                    
                    
                },
                resultUpdateGames:function()
                {
                    
                      let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.resultUpdateGamesformContainer,
                  canCancel: false,
                  onCancel: this.onCancel,
                });
                  
                    const formData = new FormData();
                    formData.append('gameId',this.delhiGame.id);
                    formData.append('pana',this.pana);
                    formData.append('open_input_result_date',this.open_input_result_date);
                    this.errors = [];
                    axios.post('game-result-update',formData).then( response => {
                        
                        $('#delhiGameResultModal').modal('hide');
                        
                        
                            this.$toaster.success('Updated successfully..');
                            this.delgiGames.splice(this.this_index,1,response.data.delhiGame);
                            
                            this.this_index = '';
                            this.delhiGame = '';
                            this.errors = [];
                            loader.hide()
                        
                          
                        
                    }).catch((error) => {
                        if(error.response.data.errors)
                        {
                            this.errors = error.response.data.errors;
                         this.$toaster.error(error.response.data.errors.pana[0]);
                         this.$toaster.error(error.response.data.errors.open_input_result_date[0]);
                         loader.hide();
                            
                        }
                        
                    })
                    
                }
                
            }
            
        });
    </script>

@stop 