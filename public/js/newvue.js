var searchUser = new Vue({
	el:"#searchUser",
	data:{
		search_key:'',
		html_result:'',
		html_status_result:false,
		html_status_main:true,


	},
	methods:{
		srarchUser(){

		 axios.get('search-bidding',{params:{search_key:this.search_key}}).then(response => {
            this.html_result = response.data;
            html_status_result = true;
            html_status_main = false;
		 });

	}
}

});

var turnover = new Vue({
	el:".turnover",
	data:{
		date:'',
		errors:[],

	},
	methods:{
		turnover(){
			console.log()

			axios.get("/parse/turnovers",{params:{date:this.date}}).then( response => {

				if(response.data.return == false)
				{
					this.errors = response.data.errors;

					console.log(response.data.errors.date);

				}
				else if(response.data.return == true)
				{

				}

			});


		}
	}

});