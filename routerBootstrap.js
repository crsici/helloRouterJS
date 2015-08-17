require([ 'rsvp','router','jquery' ], function(RSVP,Router) {
	router = new Router.default();
	var promise = new RSVP.Promise(function(resolve, reject){
		resolve({id:100});
	});
	router.map(function(match) {
		match("/posts/:id").to("showPost");
		match("/posts").to("postIndex");
	});

	var myHandlers = [];

	myHandlers['showPost'] = {
		model : function(params) {
			console.log("showPost model");
			console.log(params.id);
			return promise.then(function(json) {
			      return {name:"fuck"};
		    });
		},

		setup : function(post) {
			console.log("Setup show post");
			console.log(post);
		},
		//the router will pass it to the handler's serialize method to extract the parameters
		serialize: function(post) {
		    console.log("serialize");
			return post;
		  }
	};

	myHandlers['postIndex'] = {
		model : function(params) {
			return App.Post.findAll();
		},

		setup : function(posts) {
			// render a template with the posts
		}
	};

	myHandlers['newPost'] = {
		setup : function(post) {
			// render a template with the post
		}
	};

	router.getHandler = function(name) {
		console.log("get handler " + name);
		console.log( myHandlers[name]);
		console.log( myHandlers);
		return myHandlers[name];
	};

	$(window).on('hashchange', function() {
		console.log("Hash URL is " + location.hash.substr(1));
		router.handleURL(location.hash.substr(1));
	});
	
	$(document).ready(function(){
        console.log("Onload hash URL is " + location.hash.substr(1));
        router.handleURL(location.hash.substr(1));
    });
	
	router.transitionTo("showPost",{something:"something"});
});