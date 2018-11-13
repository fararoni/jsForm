"# jsForm - Isaí Fararoni - Primer Borrador" 

`echo "# jsForm" >> README.md
`git init
`git add README.md
`git commit -m "first commit"
`git remote add origin https://github.com/fararoni/jsForm.git
`git push -u origin master



jsForm
=========

![MIT license](https://img.shields.io/badge/License-MIT-blue.svg?longCache=true)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?longCache=true)
![Maintained](https://img.shields.io/badge/Maintained-yes-brightgreen.svg?longCache=true)
![Release](https://img.shields.io/github/release/jsonform/jsonform.svg)
![NPM: released](https://img.shields.io/npm/v/jsonform.svg)

JsForm es una librería Javascript, que permite defnir un formulario BootStrap para construir una interfaz CRUD a partir de un esquema JSON.

Esta compuesta por la siguientes funcionalidades: Definición del Fomulario, Definiciones de las reglas de validación, tanto de captura como previas al envío, generar el JSON para enviar a almacenar al servidor.

**Table de contenido:** 

- [jsForm](#)
  - [Caracteristicas](#caracteristicas)
  - [Ejemplo de uso](#uso)
  - [Formulario](#formulario)
  - [Validación](#validacion)
  - [Envío de formulario](#envio)
  - [Soporte, errores y solicitudes](#soporte)
  - [Autor](#autor)
  - [License](#license)

## Caracteristicas
* Formulario. Definición del formulario a partir de un esquema JSON
* Validación,  para la captura y el envío
* Envío, del formulario en formato JSON
* Soporte al ciclo de vida de un CRUD


## Ejemplo de uso
---------------

Este es un ejemplo simple, para generar un formulario de acuerdo a la definicón de la Guía Gráfica de Gob.MX. Como se aprercia, se respeta la plantilla original y los componentes se incorporan de forma natural.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ejemplo de nueva página para GOB.mx</title>


    <!-- CSS -->
    <link href="/favicon.ico" rel="shortcut icon">
    <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">

    <!-- Respond.js soporte de media queries para Internet Explorer 8 -->
    <!-- ie8.js EventTarget para cada nodo en Internet Explorer 8 -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ie8/0.2.2/ie8.js"></script>
    <![endif]-->

  </head>
  <body>
    <!-- Contenido -->
    <main class="page">
      <div class="container top-buffer-submenu">...
		<jsonForm></jsonForm>
		<script src="jsonForm.js?25"></script>
	  </div>
    </main>
    <!-- JS -->
    <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>
  </body>
</html>
```

Esquema
* Ejemmplo 1: Formulario Simple. https://jsoneditoronline.org/?id=c43e3fdcc3ff4ab1b4030277020e5934
```json
{
  "jsonForm": {
    "name": "gob.mx",
    "header": {
      "title": "Formulario básico",
      "subtitle": "Ejemplo de formulario básico",
      "intro": "Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit. Duis consectetur libero id gravida volutpat. Nunc mauris lorem, sodales eu suscipit id, fermentum vitae neque."
    },
	"cols":3,
	"class1":"form-horizontal",
	"class":"clearfix",
    "inputs": [
      {
        "type": "text",
        "name": "nombre",
        "label": "Nombre(s)",
        "placeholder": "ayuda",
		"required" : true
      },
      {
        "type": "text",
        "name": "firstName",
        "label": "Primer apellido",
        "placeholder": "Ingresa tu primer apellido",
		"required" : true
      },
      {
        "type": "text",
        "name": "secondName",
        "label": "Segundo apellido",
        "placeholder": "Ingresa tu segundo apellido"
      },
      {
        "type": "number",
        "name": "lada",
        "label": "Lada*:",
        "placeholder": "Lada"
      },
      {
        "type": "text",
        "name": "telefono",
        "label": "Teléfono fijo",
        "placeholder": "Teléfono"
      },
      {
        "type": "text",
        "name": "correo",
        "label": "Correo electrónico",
        "placeholder": "Correo electrónico"
      },
      {
        "type"			: "radio",
        "name"			: "sexo",
        "label"			: "Sexo*:",
        "placeholder"	: "Sexo",
		"class"      	: "radio-inline",
		"direction"		: "horizontal",
		"values"		: [
			{"value":"H", "text":"Hombre"},
			{"value":"M", "text":"Mujer"}
		]
      },
      {
        "type": "radio",
        "name": "nacionalidad",
        "label": "Nacionalidad*:",
        "placeholder": "nacionalidad",
		"class"      	: "radio-inline",
		"direction"		: "horizontal",
		"values"		: [
			{"value":"M", "text":"Mexicano"},
			{"value":"E", "text":"Extranjero"}
		]
      },
      {
        "type": "radio",
        "name": "estadoCivil",
        "label": "Estado civil",
		"class"      	: "radio-inline",
		"direction"		: "vertical",
        "placeholder": "Estado civil",
		"values"		: [
			{"value":"1", "text":"Soltero"},
			{"value":"2", "text":"Casado"},
			{"value":"3", "text":"Unión libre"},
			{"value":"4", "text":"Divorciado"},
			{"value":"5", "text":"Viudo"}
		]
      },
      {
        "type": "radio",
        "name": "vivienda",
        "label": "Tipo de vivienda*:",
		"class"      	: "radio-inline",
		"direction"		: "vertical",
        "placeholder": "vivienda",
		"values"		: [
			{"value":"a", "text":"Propia"},
			{"value":"b", "text":"Alquilada"},
			{"value":"c", "text":"Hipotecada"},
			{"value":"d", "text":"De un familiar"},
			{"value":"e", "text":"Otros"}
		]
      },
      {
        "type": "date",
        "name": "fechaNac",
        "label": "Fecha de nacimiento*:",
        "placeholder": "fechaNac"
      }
    ],
    "buttons": [
      {
	    "type"			: "checkbox",
        "name"			: "terminos",
        "label"			: " ",		
		"class"      	: "radio-inline",
		"direction"		: "vertical",
        "placeholder"	: "Acepto los términos",
		"values"		: [
			{"value":"s", "text":"Acepto los términos"}
		]
      },
	      {
		"type"			: "button",
        "name": "cancelar",
        "label": "cancelar",
		"class"      	: "btn btn-default",
        "placeholder": "cancelar"
      },
      {
		"type"			: "button",
        "name": "enviar",
        "label": "enviar",
		"class"      	: "btn btn-primary",
        "placeholder": "enviar"
      }
    ]
  }
}
```
* Ejemmplo 2: Paneles https://raw.githubusercontent.com/fararoni/jsForm/master/jsonFormCrud.group.json
```json
{
    "form": {
      "method": "get",
      "name": "datos",
      "action": "self",
      "class": "clearfix",
      "inputs": [
        {
          "type": "text",
          "name": "nombre",
          "model": true,
          "label": "Nombre(s)",
          "placeholder": "ayuda",
          "validations": [
            {
              "required": true,
              "input": "alpha"
            }
          ]
        },
        {
          "type": "text",
          "name": "firstName",
          "label": "Primer apellido",
          "placeholder": "Ingresa tu primer apellido",
          "required": true
        },
        {
          "type": "text",
          "name": "secondName",
          "label": "Segundo apellido",
          "placeholder": "Ingresa tu segundo apellido"
        },
        {
          "group": {
            "type": "tabs",
            "name": "example",
            "panels": [
              {
                "name": "Inicio",
                "title": "Inicio",
                "inputs": [
                  {
                    "type": "number",
                    "name": "lada",
                    "label": "Lada*:",
                    "placeholder": "Lada"
                  },
                  {
                    "type": "text",
                    "name": "telefono",
                    "label": "Teléfono fijo",
                    "placeholder": "Teléfono"
                  },
                  {
                    "type": "text",
                    "name": "correo",
                    "label": "Correo electrónico",
                    "placeholder": "Correo electrónico"
                  }
                ]
              },
              {
                "name": "Cargar archivo",
                "title": "Cargar archivo",
                "inputs": [
                  {
                    "type": "radio",
                    "name": "sexo",
                    "label": "Sexo*:",
                    "placeholder": "Sexo",
                    "class": "radio-inline",
                    "direction": "horizontal",
                    "values": [
                      {
                        "value": "H",
                        "text": "Hombre"
                      },
                      {
                        "value": "M",
                        "text": "Mujer"
                      }
                    ]
                  },
                  {
                    "type": "radio",
                    "name": "nacionalidad",
                    "label": "Nacionalidad*:",
                    "placeholder": "nacionalidad",
                    "class": "radio-inline",
                    "direction": "horizontal",
                    "values": [
                      {
                        "value": "M",
                        "text": "Mexicano"
                      },
                      {
                        "value": "E",
                        "text": "Extranjero"
                      }
                    ]
                  },
                  {
                    "type": "radio",
                    "name": "estadoCivil",
                    "label": "Estado civil",
                    "class": "radio-inline",
                    "direction": "vertical",
                    "placeholder": "Estado civil",
                    "values": [
                      {
                        "value": "1",
                        "text": "Soltero"
                      },
                      {
                        "value": "2",
                        "text": "Casado"
                      },
                      {
                        "value": "3",
                        "text": "Unión libre"
                      },
                      {
                        "value": "4",
                        "text": "Divorciado"
                      },
                      {
                        "value": "5",
                        "text": "Viudo"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "toolbar": [
        {
          "type": "checkbox",
          "name": "terminos",
          "label": " ",
          "class": "radio-inline",
          "direction": "vertical",
          "placeholder": "Acepto los términos",
          "values": [
            {
              "value": "s",
              "text": "Acepto los términos"
            }
          ]
        },
        {
          "type": "button",
          "name": "cancelar",
          "label": "cancelar",
          "class": "btn btn-default",
          "placeholder": "cancelar"
        },
        {
          "type": "button",
          "name": "enviar",
          "label": "enviar",
          "class": "btn btn-primary",
          "placeholder": "enviar"
        }
      ],
      "columns": 3
    }
  }
```

Documentación
-------------

Estructura 
| Elemento | Atributos | Valores |
|--- | --- | --- |
|  form | | {} |
| | method | get, post |
| | name |  |
| | action | |
| | class | clearfix |
| | inputs | [] |
| | toolbar |  [] |
| | columns | 1..12 |


Playground
----------


Dependencies
------------




License
-------

