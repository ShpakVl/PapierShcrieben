const gulp = require('gulp')
const sass = require('gulp-sass')
const prefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const cleanCss = require('gulp-clean-css')

const sassToCss = function sassToCss()
{
  return gulp.src('./src/sass/*.sass')
    .pipe(sass())
    .pipe(prefixer({cascade: false}))
    .pipe(shorthand())
    .pipe(cleanCss())
    .pipe(gulp.dest('./build/css'))
}

module.exports = sassToCss