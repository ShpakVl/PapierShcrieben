const gulp = require('gulp')
const pugToHtml = require('./pugToHtml')
const sassToCss = require('./sassToCss')
const js = require('./js')
const clean = require('./clean')
const img = require('./img')

module.exports = gulp.series(clean, gulp.parallel(pugToHtml, sassToCss, js, img))