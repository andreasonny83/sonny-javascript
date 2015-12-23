function test(arr, fn) {
	var newArr = [];

	for(var i = 0; i<3; i++) {
		newArr.push(
			(function() {
				return arr[i];
			}(i))
		);
	}

	return newArr;
}

var sonny = test(['a', 'b', 'c'], function(val) {
	return 'val:' + val;
});

console.log(sonny);
