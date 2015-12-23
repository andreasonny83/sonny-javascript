var r = new XMLHttpRequest();

r.open("GET", "test.json", true);

r.onreadystatechange = function () {
	console.log('here');
  if (r.readyState != 4 || r.status != 200) return;
	console.log(r.responseText);
};

r.send();
