var app = new Vue({
	el: '#app',
	data: {
		eur: 0,
		pln: 0,
		us : 0,
	},

	methods: {

	},

	computed: {

	},

	watch: {
		eur: function (v){
			this.pln = v * 4.55;
			this.us = v * 1.08;
			console.log("Run eur");
		},
		/*pln: function (v1){
			this.us = v1 / 4.22;
			this.eur = v1 / 4.55;
			console.log("Run minute");
		},
		us: function (v2){
			this.eur = v2 * 1.09;
			this.pln = v2 * 4.22;
			
		},*/
	},
})