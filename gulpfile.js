var gulp   = require('gulp');
var runseq = require('run-sequence');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watch = require("gulp-watch");
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
var restart = require("gulp-restart");
var watch = require("gulp-watch");
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass-glob");

gulp.task('build-ts', function () {
    return browserify({
        entries: './app/src/app.ts'
    }).plugin('tsify')
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./app'));
});

gulp.task('build-editer', function () {
  return browserify({
      entries: './editer/app.tsx'
  }).plugin('tsify')
      .bundle()
      .on('error', function (error) { console.error(error.toString()); })
      .pipe(source('app.js'))
      .pipe(gulp.dest('./editer'));
});


gulp.task('sass', function(){
  gulp.src('./sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css/'));
});

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('sass-watch', ['sass'], function(){
  gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task("default", ["build-ts", "build-editer", "sass-watch"], function(){
  gulp.watch(["**/*.{ts, tsx}", "./editer/app.tsx", "./editer/**/*.{tsx, ts}"], ["build-ts","build-editer"])
});
