var gulp   = require('gulp');
var runseq = require('run-sequence');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watch = require("gulp-watch");
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
var restart = require("gulp-restart");

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build-ts', function () {
    return browserify({
        entries: './app/src/app.ts'
    }).plugin('tsify')
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./app'));
});

gulp.task("default", ["build-ts"], function(){
  gulp.watch("**/*.ts", ["build-ts"])
});
