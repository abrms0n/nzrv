'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function () {
    gulp.src('./blocks/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./styles'));
   });


gulp.task('concat', function() {
    return gulp.src('./styles/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./styles'));
});


/* gulp.task('css', function () {
  gulp.src('./styles/s.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});
*/