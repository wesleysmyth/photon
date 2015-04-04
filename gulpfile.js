var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var shell = require('gulp-shell');
var bs = require('browser-sync');

// the paths to our app files
var paths = {
  // all our client app js files, not including 3rd party js files
  scripts: ['client/app/**/*.js'],
  html: ['client/**/*.html', 'index.html'],
  styles: ['client/content/styles/*'],
  test: ['specs/**/*.js']
};

// Use browser sync to automatically refresh page on client side file save
gulp.task('start', ['serve'],  function () {
  bs({
    notify: true,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:8000'
  });
});

// start our node server using nodemon
gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'});
});

// watch all stylus files for changes and compile to css
gulp.task('render', shell.task(['stylus -w client/content/styles/main.styl']));

// run tests
gulp.task('test', function() {
  console.log('here we\'d be running all the tests and such');
});

// call start and render
gulp.task('default', ['start','render']);
