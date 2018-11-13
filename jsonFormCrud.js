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


		var divRowPanel = document.createElement("div");
			divRowPanel.className = jsonForm.name;

		var divRow = document.createElement("div");
			divRow.className = 'col-md-12' ;

		console.log("Generando panels." + jsonForm.panels);

		for (var j = 0; j < jsonForm.panels.length; j++) {
			var input = jsonForm.panels[j];
			var nodo =  generateForm(input.inputs, cols);
			divRow.appendChild(nodo); 
		}
		
		divRowPanel.appendChild(divRow);	
		return divRowPanel;
		
	} else if (Array.isArray(jsonForm) ) {
		console.log("Generando inputs." );
		var divRowForm = document.createElement("div");
			divRowForm.className = 'row';

		var divRow = document.createElement("div");
			divRow.className = 'row';
			for (var j = 0; j < jsonForm.length; j++) {

				var input = jsonForm[j];
				if (isSet(input.group) ){
					var nodo = generateForm(input.group, cols);
					divRowForm.appendChild(nodo); 
				} else {
					var divCol = document.createElement("div");
					divCol.className = 'col-md-' + (12 / cols);
					var  nodo = inputTypes[jsonForm[j].type](input);
					divCol.appendChild(nodo);
					divRow.appendChild(divCol); 
					if ( ((j+1) % cols) == 0){
						divRowForm.appendChild(divRow); 
						divRow = document.createElement("div");
						divRow.className = 'row';
					}
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
	
	var divRowPanel = document.createElement("div");
		divRowPanel.className = jsonForm.name;

	var ul = document.createElement("ul");
	var tabContent = document.createElement("div");
		tabContent.className = "tab-content";

	for (var j = 0; j < jsonNode.panels.length; j++) {
		var input = jsonForm.panels[j];
		
		var divLi = document.createElement("li");
			var divA = document.createElement("a");
			divA.setAttribute('data-toggle','tab');
			divA.setAttribute('href','#tab-' + j);
			var labelField = document.createElement("label");
				labelField.innerHTML="test";
				divA.appendChild(labelField);
				divLi.appendChild(divA);
		ul.appendChild(divLi); 

		var divTabPane = document.createElement("div");
			divTabPane.className = "tab-pane";
			var nodo =  generateForm(input.inputs);
			divTabPane.appendChild(nodo);
		tabContent.appendChild(divTabPane);
	}
	divRowPanel.appendChild(ul);
	divRowPanel.appendChild(tabContent);
	
	return divRowPanel;

}