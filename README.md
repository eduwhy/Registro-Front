Para iniciar a usar la plantilla Mangel se debe usar
    
    npm install  -> Para instalar las dependencias que se encuentran en package.json
    bower install -> Para instalar las dependencias que se encuentran en bower.json

Para desarrollo se recomienda el siguiente paso

    1. El servidor de desarrollo se puede correr usando el siguiente comando
            gulp

Para producción se recomienda el siguiente paso


    2. Iniciar Servidor Producción y Optimizar código
            gulp produccion

DETALLE DE LA ESTRUCTURACIÓN DE DIRECTORIOS

- En la raiz del proyecto se encuentra los archivo de configuración tales como
.bowerrc, .gitignore, .jshintrc, bower.json, gulpfile, package.json. Igualmente se encuentra 
la carpeta source, que es donde se agregarán los archivos necesarios para la aplicación(app,
img, lib y el index.html).

Cuando se corre el servidor en producción crea una carpeta dist con código optimizado.

Ruberney Rodríguez Valderrama...
ruber19@gmail.com