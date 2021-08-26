let mix = require('laravel-mix');

mix.js('src/js/main.js', 'dist/')
   .js('src/js/app.js', 'dist/')
   .sass('src/scss/main.scss', 'dist/');

