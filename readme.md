### 1. Bienvenida al curso
Aprendermos el asincronismo:
* callbacks
* promises
* async
* await

Haremos retos con cada uno de ellas, el cual consitira en hacer llamados a una api publica y procesar la data con ciertos
requisitos que debemos de cumplir.

### 2. Introduccion al asincronismo
* javascript es un lenguaje de programacion asincrono y no bloqueante, con un manejador de eventos implementado en un unico hilo para sus interfaces de entrada y salida.
* Asincronismo es la accion que no ocurre al mismo tiempo

En js

Tenemos una entrada y salida que circula sobre un thread.


### 3. Presentacion del reto
Se trata de consumir una API, https://rickandmortyapi.com/


### 4. Definicion estructura callback
* callback: es una funcion que le pasamos como parametro otra funcion, y cuando haceos una peticion o un llamado asincrono, esta se ejecuta despues de este llamado, esta es la forma como js ha implementado el asincronismo

Creamos el proyecto:

```bash
$ npm init
Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

name: (curso-de-asincronismo-con-javascript) 
version: (1.0.0) 
description: Working with js
entry point: (index.js) src/index.js
test command: 
git repository: (https://github.com/ederrafo/curso-de-asincronismo-con-javascript.git) 
keywords: callbacks, promises, asyncs
author: Eder Rafo
license: (ISC) MIT
About to write to /home/usuario/eder/projects/javascript/curso-de-asincronismo-con-javascript/package.json:

{
  "name": "curso-de-asincronismo-con-javascript",
  "version": "1.0.0",
  "description": "Working with js",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ederrafo/curso-de-asincronismo-con-javascript.git"
  },
  "keywords": [
    "callbacks",
    "promises",
    "asyncs"
  ],
  "author": "Eder Rafo",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ederrafo/curso-de-asincronismo-con-javascript/issues"
  },
  "homepage": "https://github.com/ederrafo/curso-de-asincronismo-con-javascript#readme"
}

Is this ok? (yes) yes

```

* Generamos los scripts que nos permitira ejecutar de forma correcta
En el archivo package.json, "scripts", para no escribir toda la ruta, creamos un comando donde especificamos la ruta donde esta el archivo a ejecutar
```json
 "scripts": {
    "callbacks": "node src/callback/index.js"
  },
```

























