const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')

const pugToHtml = function pugToHtml()
{
  return gulp.src('./src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({reporter: 'default'}))
    .pipe(pug({pretty: true}))
    .pipe(htmlValidator())
    .pipe(gulp.dest('./build'))
}

module.exports = pugToHtml