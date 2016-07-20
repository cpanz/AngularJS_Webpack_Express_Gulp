var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('nodemon', function (cb) {
    var called = false;
    nodemon({
      script: './bin/server.js'
    })
    .on('start', function () {
      if (!called) cb();
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, 500);
    })
    .on('error', function(err) {
     // Make sure failure causes gulp to exit
     throw err;
   });
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        browser: "google chrome",
        port: 5000,
    });
});