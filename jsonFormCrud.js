//----------------------------------------------------------------
var isSet = function (value) {return !( value === void 0 || value === null ); };

function renderJsonForm(jsonObj, divTarget){
	var form = generateForm(jsonObj);
	var divForm = document.querySelector(divTarget);
	divForm.appendChild(form);	
}

function generateForm(jsonForm, cols){
	if (isSet(jsonForm.form) ) {
		console.log("Generando form." + jsonForm.form);
		var  nodo = inputTypes.form(jsonForm.form);
		var cols = jsonForm.form.columns;
		var child = generateForm(jsonForm.form.inputs, cols);
		nodo.appendChild(child);	
		return nodo;
	} else if (isSet(jsonForm.panels) ) {
		var divRowGroup = document.createElement("div");
			divRowGroup.className = 'row';

		var divRow = document.createElement("div");
			divRow.className = 'row';

		console.log("Generando panels." + jsonForm.panels);
		
//		var cols = jsonForm.form.columns;
		for (var j = 0; j < jsonForm.panels.length; j++) {
			var divCol = document.createElement("div");
			var input = jsonForm.panels[j];
			var nodo =  generateForm(input.inputs, cols);
			divCol.appendChild(nodo);
			divRow.appendChild(divCol); 
		}
		
		divRowGroup.appendChild(divRow);	
		return divRowGroup;
		
	} else if (Array.isArray(jsonForm) ) {
		console.log("Generando inputs." );
		var divRowForm = document.createElement("div");
			divRowForm.className = 'row';

		var divRow = document.createElement("div");
			divRow.className = 'row';
			for (var j = 0; j < jsonForm.length; j++) {
				var divCol = document.createElement("div");
				divCol.className = 'col-md-' + (12 / cols);
				var input = jsonForm[j];
				if (isSet(input.group) ){
					var nodo = generateForm(input.group, cols);
					///var  nodo = inputTypes[jsonForm[j].type](input);
				} else {
					var  nodo = inputTypes[jsonForm[j].type](input);
				}
				divCol.appendChild(nodo);
				divRow.appendChild(divCol); 

				if ( ((j+1) % cols) == 0){
					divRowForm.appendChild(divRow); 
					divRow = document.createElement("div");
					divRow.className = 'row';
				}
			}
		divRowForm.appendChild(divRow); 
		return divRowForm;
	}
	return null;
}

//------ Tools
var inputTypes = {
	'form'	: function(jsNode) {return tmplForm(jsNode)},
	'panels': function(jsNode) {return tmplPanels(jsNode)},
	'text'	: function(jsNode) {return tmplInput(jsNode)},
	'number': function(jsNode) {return tmplInput(jsNode)},
	'date'	: function(jsNode) {return tmplInput(jsNode)},
	'tabs'	: function(jsNode) {return tmplTabs(jsNode)},
	'radio'	: function(jsNode) {return tmplOptionsInput(jsNode)},
}


var tmplHeader = function (jsonNode) {
	console.log("Generando tmplHeader." );
    var section = document.createElement('section'); 
        var renglon = document.createElement('row');
            var title = document.createElement('h1');
                title.textContent = jsonNode.title;
            var subTitle = document.createElement('h2');
				subTitle.textContent = jsonNode.subtitle;
            var hr = document.createElement('hr');
				hr.className = 'red';
            var intro = document.createElement('p');
				intro.textContent = jsonNode.intro;	
		renglon.appendChild(title);
		renglon.appendChild(subTitle);
		renglon.appendChild(hr);
		renglon.appendChild(intro);		
	section.appendChild(renglon);
    return section;
    
}
var  tmplForm = function(jsonNode){
	console.log("Generando tmplForm." + jsonNode.name);

	var formElement = document.createElement("form");
		formElement.setAttribute("id"	 , jsonNode.name);
		formElement.setAttribute("name"	 , jsonNode.name);
		formElement.setAttribute("method", jsonNode.method);
		formElement.setAttribute("class" , jsonNode.class);
		formElement.setAttribute("role"	 , 'form');
//	var section = tmplHeader(jsonNode.header);
	//section.appendChild(formElement);
	return formElement;
}
var  tmplPanels = function(jsonNode){
	console.log("Generando tmplForm." + jsonNode.name);
	var formElement = document.createElement("dir");
		formElement.setAttribute("id"	 , jsonNode.name);
		formElement.setAttribute("name"	 , jsonNode.name);
		formElement.setAttribute("method", jsonNode.method);
		formElement.setAttribute("class" , jsonNode.class);
	return formElement;
}

var  tmplInput = function(jsonNode){
	console.log("Generando tmplInput." + jsonNode.name);
		var formGroup = document.createElement("div");
			formGroup.className = 'form-group';
			
		var formField = document.createElement("input");
			formField.setAttribute("id", jsonNode.name);
			formField.setAttribute("type", jsonNode.type);
			formField.setAttribute("name", jsonNode.name);
			formField.setAttribute("class", 'form-control');
		
		var labelField = document.createElement("label");
			labelField.innerHTML=jsonNode.label;
			if ( isSet ( jsonNode.required ) && jsonNode.required )
				labelField.innerHTML+="*:";
            labelField.htmlFor = jsonNode.name;
			
		formGroup.appendChild(labelField);  
		formGroup.appendChild(formField);  
		return formGroup;
}
var tmplOptionsInput = function(jsonNode){
	console.log("Generando tmplOptionsInput." + jsonNode.name);
	var formGroup = document.createElement("div");
			formGroup.className = 'form-group';
			var formField = document.createElement("div");
			jsonNode.values.forEach(function(element) {
				var option = document.createElement("input"); 
					option.setAttribute('type'	, jsonNode.type);
					option.setAttribute('id'	, jsonNode.name);
					option.setAttribute('name'	, jsonNode.name);
					option.setAttribute('value'	, element.value);
				var label = document.createElement( 'label');
				label.className = jsonNode.class;
				label.innerHTML = option.outerHTML + element.text;
				if (jsonNode.direction == 'vertical') {
					var vertical = document.createElement( 'div');
					vertical.appendChild(label);
					formField.appendChild(vertical);  
				} else {
					formField.appendChild(label);  
				}
			});
		
		var labelField = document.createElement("label");
			labelField.innerHTML=jsonNode.label;
			if ( isSet ( jsonNode.required ) && jsonNode.required )
				labelField.innerHTML+="*:";
            labelField.htmlFor = jsonNode.name;
		formGroup.appendChild(labelField);  
		formGroup.appendChild(formField);  
		return formGroup;
}
var tmplTabs = function(jsonNode){
	console.log("Generando tmplTabs." + jsonNode.name);
	var formElement = document.createElement("input");
		formElement.setAttribute("id"	 , jsonNode.name);
		formElement.setAttribute("type", jsonNode.type);
		formElement.setAttribute("name"	 , jsonNode.name);
		formElement.setAttribute("class", 'form-control');
	return formElement;
}


//-----------------------------------------------------------
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




