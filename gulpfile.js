/*!
 * client/gulpfile.js
 * 
 * Copyright(c) 2017 @project-name
 * Author: @author
 * Date: @date
 */
 
const gulp = require('gulp');
const babel = require('gulp-babel');
const strip = require('gulp-strip-comments');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');


gulp.task('client', function () {
  return gulp.src('public/js/app.bundle.js')
    .pipe(strip())
    .pipe(babel({
        presets: ['env', 'es2015', 'stage-0']
    }))
    .pipe(uglify({ mangle: false }))
    .pipe(rename('app.bundle.min.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['client']);