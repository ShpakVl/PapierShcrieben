const gulp = require('gulp')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const newer = require('gulp-newer')

const js = function js()
{
  return gulp.src('./src/js/*.js')
    .pipe(newer({dest: './build/js'}))
    .pipe(terser())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/js'))
}

module.exports = js