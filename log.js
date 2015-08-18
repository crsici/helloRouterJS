define([], function() {
	this.log = function(name,obj) {
		$('#container')
				.append(
						$("<p> " + name + " is called " + JSON.stringify(obj)
								+ "</p>"));
	}
});