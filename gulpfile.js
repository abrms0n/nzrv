'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    return gulp.src('./blocks/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
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

gulp.task('default', gulp.series('sass','concat-css','clean'));

