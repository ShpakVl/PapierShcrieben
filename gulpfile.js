const gulp = require('gulp')
const pugToHtml = require('./gulp/pugToHtml')
const sassToCss = require('./gulp/sassToCss')
const js = require('./gulp/js')
const clean = require('./gulp/clean')
const build = require('./gulp/build')
const img = require('./gulp/img')

const server = require('browser-sync').create()

const start = function start(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: false,
        cors: true
    })

    gulp.watch(
        './src/sass/**/*.sass',
        gulp.series(sassToCss, cb => gulp.src('./build/css').pipe(server.stream()).on('end', cb))
    )

    gulp.watch(
        'src/js/**/*.js',
        gulp.series(js)
    ).on('change', server.reload)

    gulp.watch('./src/pages/**/*.pug', gulp.series(pugToHtml))

    gulp.watch('./build/*.html').on('change', server.reload)

    gulp.watch('./src/img/**/*', gulp.series(img)).on('add', () => server.reload)

    return cb()
}

module.exports.start = start
module.exports.dev = gulp.series(build, start)
module.exports.clean = clean
module.exports.build = build