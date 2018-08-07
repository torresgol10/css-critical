var gulp = require('gulp');
var critical = require('critical');

gulp.task('critical', ['generate'], function () {
    gulp.src(['./css/critical-*.css'])
        .pipe(gulp.dest('.'));
});

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
    critical.generate({
        base: './',
        src: 'https://www.midominio.com/listado/',
        dimensions: [{
            width: 1920,
            height: 1080
        }],
        dest: 'css/critical-listado.css',
        minify: true,
        extract: false,
        pathPrefix: '/css',
        ignore: ['font-face','url']
    });
    critical.generate({
        base: './',
        src: 'https://www.midominio.com/categoria.html',
        dimensions: [{
            width: 1920,
            height: 1080
        }],
        dest: 'css/critical-cateroria.css',
        minify: true,
        extract: false,
        pathPrefix: '/css',
        ignore: ['font-face','url']
    });
    critical.generate({
        base: './',
        src: 'https://www.midominio.com/blog/',
        dimensions: [{
            width: 1920,
            height: 1080
        }],
        dest: 'css/critical-blog.css',
        minify: true,
        extract: false,
        pathPrefix: '/css',
        ignore: ['font-face','url']
    });
    critical.generate({
        base: './',
        src: 'https://www.midominio.com/single.html',
        dimensions: [{
            width: 1920,
            height: 1080
        }],
        dest: 'css/critical-single.css',
        minify: true,
        extract: false,
        pathPrefix: '/css',
        ignore: ['font-face','url']
    });
});
