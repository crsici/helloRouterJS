require([ 'rsvp', 'router', 'jquery' ], function(RSVP, Router) {
	router = new Router.default();
	var promise = new RSVP.Promise(function(resolve, reject) {
		resolve({
			id : 100
		});
	});
	router.map(function(match) {
		match("/nests").to("nests", function(match) {
			match("/nest1").to("nest1");
			match("/nest2").to("nest2");
		});
	});

	var myHandlers = [];

	myHandlers['nests'] = {
		model : function(params) {
			log("nests.model", params);
			return params;
		},

		setup : function(post) {
			log("nests.setup", post);
		}
	};

	myHandlers['nest1'] = {
		model : function(params) {
			log("nest1.model", params);
			return promise.then(function(json) {
				return {
					name : "trungp"
				};
			});
		},

		setup : function(post) {
			log("nest1.setup", post);
		}
	};

	myHandlers['nest2'] = {
		model : function(params) {
			log("nest2.model", params);

			return params;
		},

		setup : function(post) {
			log("nest2.setup", post);
		}
	};

	// -------------------------------------------
	router.getHandler = function(name) {
		return myHandlers[name];
	};

	$(window).on('hashchange', function() {
		console.log("Hash URL is " + location.hash.substr(1));
		router.handleURL(location.hash.substr(1));
	});

	$(document).ready(function() {
		console.log("Onload hash URL is " + location.hash.substr(1));
		router.handleURL(location.hash.substr(1));
	});

});
// router.transitionTo("showPost",{something:"something"});
// router.trigger('collapseSidebar');
