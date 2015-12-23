// function People() {
// 	this.name =  'Sonny';
// }
var People = {
		name: 'Sonny'
};

People.getName = function() {
	return `Hello ${this.name}`;
}

var sonny = Object.create(People);

var pippo = {
	name: 'Pippo'
}

pippo = People.getName.apply(pippo);

console.log( pippo );
