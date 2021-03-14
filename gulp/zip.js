const gulp = require('gulp')
const gulpZip = require('gulp-zip')

const zip = function zip()
{
  return gulp.src('./build/**/*')
    .pipe(gulpZip('build.zip'))
		.pipe(gulp.dest('./'))
}

module.exports = zip