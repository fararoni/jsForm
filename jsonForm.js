//var requestURL = 'https://raw.githubusercontent.com/fararoni/jsForm/master/jsonForm.json';
var requestURL = 'jsonForm.json';
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
	
	populateHeader(jsonObj);
  
}
function populateHeader(jsonObj) {
	var section = document.createElement('section'); 
		var renglon = document.createElement('row'); 
			var title = document.createElement('h1');
				title.textContent = jsonObj['jsonForm']['header']['title'];
			var subTitle = document.createElement('h2');
				subTitle.textContent = jsonObj['jsonForm']['header']['subtitle'];
			var hr = document.createElement('hr');
				hr.className = 'red';
				subTitle.textContent = jsonObj['jsonForm']['header']['subtitle'];
			var intro = document.createElement('p');
				intro.textContent = jsonObj['jsonForm']['header']['intro'];	

		renglon.appendChild(title);
		renglon.appendChild(subTitle);
		renglon.appendChild(hr);
		renglon.appendChild(intro);

	//----
	
	var cols = jsonObj['jsonForm']['cols'];
var divForm = document.createElement("form");
	divForm.setAttribute("id", jsonObj['jsonForm']['name']);
	divForm.setAttribute("name", jsonObj['jsonForm']['name']);
	divForm.setAttribute("class", jsonObj['jsonForm']['class']);
	divForm.setAttribute("role", 'form');


var divRow = document.createElement("div");
	divRow.className = 'row';
	var formFields = jsonObj['jsonForm']['inputs'];
	for (var j = 0; j < formFields.length; j++) {
		var divCol = document.createElement("div");
			divCol.className = 'col-md-' + (12 / cols);
			
		var formGroup = document.createElement("div");
			formGroup.className = 'form-group';
			
		var formField = null;
		  if (formFields[j].type == 'radio' || formFields[j].type == 'checkbox') {
			var formField = document.createElement("div");
			formFields[j].values.forEach(function(element) {
			  console.log(element);
				var option = document.createElement("input"); 
					option.setAttribute('type'	, formFields[j].type);
					option.setAttribute('id'	, formFields[j].name);
					option.setAttribute('name'	, formFields[j].name);
					option.setAttribute('value'	, element.value);
				var label = document.createElement( 'label');
				label.className = formFields[j].class;
				label.innerHTML = option.outerHTML + element.text;
				if (formFields[j].direction == 'vertical') {
					var vertical = document.createElement( 'div');
					vertical.appendChild(label);
					formField.appendChild(vertical);  
				} else {
					formField.appendChild(label);  
				}
			});
		  }	 else {
			  formField = document.createElement("input");
			  formField.setAttribute("id", formFields[j].name);
			  formField.setAttribute("type", formFields[j].type);
			  formField.setAttribute("name", formFields[j].name);
			  formField.setAttribute("class", 'form-control');
		  }
		  
			
		var labelField = document.createElement("label");
			labelField.innerHTML=formFields[j].label;
			if ( formFields[j].required )
				labelField.innerHTML+="*:";
            labelField.htmlFor = formFields[j].name;
			
		formGroup.appendChild(labelField);  
		formGroup.appendChild(formField);  
		divCol.appendChild(formGroup); 
		divRow.appendChild(divCol); 
		salto = (j+1) % cols;
		if ( salto == 0){
			divForm.appendChild(divRow); 
			divRow = document.createElement("div");
			divRow.className = 'row';
		}		
    }
	renglon.appendChild(divForm);
	section.appendChild(renglon);
	
	//---------------- Footer Buttons
	var sectionButtons 	  = document.createElement('section'); 
	var renglon 		  = document.createElement('row'); 
	var divSectionButtons = document.createElement('div'); 
		divSectionButtons.className = 'clearfix';
	var divButtons = document.createElement('div'); 
		divButtons.className = 'pull-right';
	
	var formButtons = jsonObj['jsonForm']['buttons'];
	for (var j = 0; j < formButtons.length; j++) {
		var formButton = document.createElement("button");
		//formButton.class = formButtons[j].class;
		formButton.setAttribute("class", formButtons[j].class);
		formButton.setAttribute("type", formButtons[j].type);
		formButton.value = formButtons[j].label;
		formButton.innerHTML = formButtons[j].label;
		divButtons.appendChild(formButton);
	}
	divSectionButtons.appendChild(divButtons);
	renglon.appendChild(divSectionButtons);
	sectionButtons.appendChild(renglon);
			  
	section.appendChild(sectionButtons);
	
	var jsonForm = document.querySelector('jsonForm');
	
	jsonForm.appendChild(section);
//	jsonForm.appendChild(sectionButtons);
}




