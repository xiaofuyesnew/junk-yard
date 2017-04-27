const gulp = require('gulp')    //gulp main module

//browser-sync and its reload
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('cp:dev', () => {
    return gulp.src('src/tpl/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream: true}))
})

gulp.task('dev', ['cp:dev'], () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false
    })
    gulp.watch('src/tpl/*.html', ['cp:dev'])
})