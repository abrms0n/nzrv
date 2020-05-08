'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');


gulp.task('sass', function () {
    gulp.src('./blocks/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./tmp'));
   });



gulp.task('concat-css', function() {
    return gulp.src('./tmp/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./styles'));
});


 
gulp.task('clean', function () {
    return gulp.src('./tmp', {read: false})
        .pipe(clean());
});


// gulp.task('default', ['sass', 'concat-css', 'clean', ]);