var sonnyCreate = function(o) {
	function F() {}
	F.prototype = o;

	return new F();
}


var test = {
	firstname: 'sonny'
}

var test = sonnyCreate(test);
console.log(test.firstname);
