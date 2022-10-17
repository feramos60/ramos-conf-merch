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

------------

### PWA

Para usar PWA se hace necesario crear el archivo `service-worker.js` el archivo `manifest.json` en la carpeta Public.
Luego se debe instalar el plugin de webpack para para copiar estos elementos en la carpeta de distribución dist.
`npm install copy-webpack-plugin --save-dev` 

Y se hace la respectiva configuración en `webpack.config.js` 
Primero importamos copy-webpack-plugin en la parte superior del archivo

`const CopyPlugin = require('copy-webpack-plugin');`

Agregamos la configuración necesaria en la sección de plugins:

````
new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/icon.png', to: 'assets' },
      ],
    }),
```

Una de las tareas que tenemos que realizar antes de probar nuestra aplicación es agregar el soporte del service worker al proyecto creando la lógica siguiente dentro de index.html.

```
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
        console.log('ServiceWorker registration failed: ', err);
      }).catch(function (err) {
        console.log(err)
      });
    });
  } else {
    console.log('service worker is not supported');
  }
</script>
``` 

Ahora demos de agregar la referencia al archivo manifest.json dentro de la etiqueta <head>:

`<link rel="manifest" href="./manifest.json">`

Una vez agregado el script y la referencia al manifest dentro del archivo index.html procedemos a compilar el proyecto:

`npm run build`

Cuando termina el proceso podemos revisar la carpeta /dist que ha generado Webpack y revisar que tenemos dentro el archivo manifest.json así como el archivo service-worker.js y dentro de assets el ícono que vamos a utilizar.
​
Ahora podemos correr el proyecto y comprobar que tenemos el registro del service worker y la información de nuestra aplicación:

`npm run start`


