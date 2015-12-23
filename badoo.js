B = [1, 1, -1, 1];
var dest = 0,
		prev_pos = -1,
		prev_prev_pos = -1;
		counter = 1;

function roll(A, pos) {

	dest += A[pos];

	if (dest == prev_pos) {
		console.log('here');
		return;
	}

	prev_pos = pos;

	if (dest <= A.length && dest >= 0) {
		counter++;
		console.log(dest);
		roll(A, dest);
	}
	else return;
}

function solution(A) {
	var c = roll(A, 0);

	console.log(counter);
}

solution(B);
