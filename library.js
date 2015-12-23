;(function(document, fn) {

	if ( typeof document.Jay === 'undefined' ) {
		document.Jay = fn();
	}

}(typeof window !== 'undefined' ? window : this, function() {
	var _sayHi = function() {
		return 'hi';
	}

	return {
		sayHi: _sayHi
	};
}));
