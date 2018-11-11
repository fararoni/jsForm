"# jsForm - Isaí Fararoni - Primer Borrador" 

echo "# jsForm" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/fararoni/jsForm.git
git push -u origin master



jsForm
=========

![MIT license](https://img.shields.io/badge/License-MIT-blue.svg?longCache=true)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?longCache=true)
![Maintained](https://img.shields.io/badge/Maintained-yes-brightgreen.svg?longCache=true)
![Release](https://img.shields.io/github/release/jsonform/jsonform.svg)
![NPM: released](https://img.shields.io/npm/v/jsonform.svg)

JsForm es una librería Javascript, que permite defnir un formulario BootStrap para construir una interfaz CRUD a partir de un esquema JSON.

Esta compuesta por la siguientes funcionalidades: Definición del Fomulario, Definiciones de las reglas de validación, tanto de captura como previas al envío, generar el JSON para enviar a almacenar al servidor.


Ejemplo
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



Documentación
-------------



Playground
----------


Dependencies
------------




License
-------

