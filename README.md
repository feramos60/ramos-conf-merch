# ramos-conf-merch
Este es lo inicial para crear un proyecto de React

------------

## Instrucciones de Instalación

1. Se crea la carpeta donde vamos a instalar el proyecto -> `mkdir nombreCarpeta`
1. se inicia el git -> `git init` 
1. Se crea el archivo .gitignore y se configura para ignore .DS_Store y la carpeta node_modules
1. se cambia el nombre de la rama a main
1. Se crea el repositorio remoto y se empuja el repositorio local
1. se inicia el proyecto con -> `npm init` si no se quiere configurar se coloca `npm init -y`
1. se instala React con el comando` npm install react react-dom`
1. Se crean las carpetas principales src->components->App.jsx y también dentro de scr se crea el archivo principal index.js, public->index.html
1. Se instala webpack `npm install webpack webpack-cli webpack-dev-server --save-dev``
1. Se instala el pluging de webpack html y el loader `npm install html-webpack-plugin html-loader --save-dev`
1. INstalamos babel `npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev`
1. En la raiz del proyecto se crea el archivo webpack.config.js
1. Se crea el archivo de babel en la raiz ,babelrc
1. Se agrega css `npm install css-loader mini-css-extract-plugin --save-dev` se agrega lo respectivo al webpck
1. se crea la carpeta en scr styles y la carpeta componentes y dentro de esa el archivo correpsondiente
