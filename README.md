# css-critical
Escribo el gulpfile.js necesario para sacar el css critical de una pagina online y guardarlo en un archivo en local.

#Codigo para sacar css critical con GULP

```
gulp.task('generate', function () {
    critical.generate({
        base: './',
        src: 'https://www.midominio.com',
        dimensions: [{
            width: 1920,
            height: 1080
        }],
        dest: 'css/critical-home.css',
        minify: true,
        extract: false,
        pathPrefix: '/css',
        ignore: ['font-face','url']
    });
}
```

Si quereis saber más informacion o todas las opciones y parametros, podeis ir a verlo al repositorio original del plugins esto solo es una aplicacion con explicacion para sacar el css critical a la web ya online.

https://github.com/addyosmani/critical
