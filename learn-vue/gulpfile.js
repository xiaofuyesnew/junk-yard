/**
 * filename: gulpfile.js
 * function: config gulp command
 * create date： 2017-02-07
 * last modified: 2017-02-07
 * author: Allen Wong
 */

/**
 * === MEMO ===
 * 
 */

/**============ load module ==============================*/

/** gulp and its components */
const gulp = require('gulp')
const sass = require('gulp-sass')

/** browser-sync */
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

/**============ load module(end) =========================*/

/**============ develop command ======================================*/

/** copy template html files to build */
gulp.task('html:dev', () => {
    return gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(reload({ stream: true }))
})

/** compile scss files to css */
gulp.task('sass:dev', () => {
    return setTimeout(() => {
        return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({ stream: true }))
    }, 500)
})

/** copy js file from src to build */
gulp.task('js:dev', () => {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(reload({ stream: true }))
})

/**============ develop command(end) =================================*/

/** final command for development */
gulp.task('dev', ['html:dev', 'sass:dev', 'js:dev'], () => {
    // browser-sync will start in a browser automatically
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false
    })
    // gulp would watch src files changes
    gulp.watch('./src/html/*.html', ['html:dev'])
    gulp.watch('./src/sass/*.scss', ['sass:dev'])
    gulp.watch('./src/js/*.js', ['js:dev'])
})
