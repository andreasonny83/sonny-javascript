(function(global) {
	var Greetr = function() {
		return new Greetr.init();
	};

	Greetr.prototype = {
		sayHi: function() {
			console.log('Hello');
		}
	}

	Greetr.init = function() {};

	Greetr.init.prototype = Greetr.prototype;

	window.Greetr = window.G = Greetr;
}(window));
