var gulp = require('gulp');

gulp.task('test', function () {
    return console.log('this is a test.');
});

gulp.task('copy', function () {
    return gulp.src('src/tpl/*.html')
    .pipe(gulp.dest('dist'));
});