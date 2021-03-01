const gulp = require('gulp')
const newer = require('gulp-newer')
const image = require('gulp-image')

const img = function img()
{
  return gulp.src('./src/img/**/*')
    .pipe(newer('./build/img'))
    .pipe(image())
    .pipe(gulp.dest('./build/img'))
}

module.exports = img