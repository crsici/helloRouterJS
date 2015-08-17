require
		.config({
			waitSeconds: 50000,
			baseUrl : ".",
			deps : [ 'jquery', 'rsvp', 'router', 'routerBootstrap' ],
			paths : {
				"router" : "./bower_components/router.js/dist/router.amd",
				"route-recognizer" : "./bower_components/router.js/vendor/deps/route-recognizer",
				"rsvp" : "./bower_components/router.js/vendor/deps/rsvp",
				"jquery" : "./bower_components/jquery/dist/jquery"
			},
			shim : {
				'jquery' : {
					exports : '$'
				}
			}

		});