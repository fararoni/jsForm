var requestURL = 'http://localhost:81/jsonForm/jsonForm.json';
//var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var jsonForm = request.response;
 console.log("jsonForm:" + jsonForm);
 parseJsonForm(jsonForm);
}
function parseJsonForm(jsonObj) {
	console.log("jsonObj:" + jsonObj);
  
}