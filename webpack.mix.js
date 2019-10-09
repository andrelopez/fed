const mix = require('laravel-mix');

mix

  .js([
    'app/assets/src/js/app.js',
  ], 'public/assets/dist/js/bundle.js')
  .sass('app/assets/src/scss/main.scss',
    'public/assets/dist/css/style.css')
