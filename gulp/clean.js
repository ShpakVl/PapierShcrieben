const gulp = require('gulp')
const del = require('del')

const clean = function clean()
{
  return del('./build/**/*')
}

module.exports = clean