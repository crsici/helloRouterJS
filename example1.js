//handler = {
//	beforeModel : function() {
//		//
//	},
//	model : function(params) {
//		// return App.Post.find(params.id);
//	},
//
//	afterModel : function() {
//		//
//	},
//	// when coming in from `transitionTo`, convert an
//	// object into parameters
//	serialize : function(post) {
//		// router.transitionTo("showPost",{something:"something"});
//		return {
//			id : post.id
//		};
//	},
//	setup : function(post) {
//		// render a template with the post
//	},
//	events : {
//		error : function(error, transition) {
//			//
//		},
//		willTransition : function(transition) {
//			//
//		},
//		customEvent: function(handler) {
//		    // be trigged by router.trigger('customEvent');
//	    }
//	}
//
//};

require([ 'rsvp', 'router', 'jquery' ], function(RSVP, Router) {

	router = new Router.default();

	router.map(function(match) {
		// NFA : https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton
		match("/posts/:id").to("showPost");
		match("/about").to("about");
	});

	var myHandlers = [];

	myHandlers['showPost'] = {
		model : function(params) {
			log("showPost.model", params);
			return {
				id : params.id
			};
		},
		serialize : function(post) {
			log("showPost.serialize", post);
			return post;
		},
		setup : function(post) {
			log("showPost.setup", post);
		},
	};

	myHandlers['about'] = {
		model : function(params) {
			log("about.model", params);
			return params;
		},
		setup : function(post) {
			log("about.setup", post);
		}
	};

	router.getHandler = function(name) {
		return myHandlers[name];
	};

	router.log = function(msg) {
		console.log(msg)
	};

	// -------------------------------------------------
	$(window).on('hashchange', function() {
		console.log("Hash URL is " + location.hash.substr(1));
		router.handleURL(location.hash.substr(1));
	});

	$(document).ready(function() {
		console.log("Onload hash URL is " + location.hash.substr(1));
		router.handleURL(location.hash.substr(1));
	});
});
