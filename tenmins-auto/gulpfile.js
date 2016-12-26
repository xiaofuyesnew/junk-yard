var gulp = require('gulp');
var sass = require('gulp-sass');
var swig = require('gulp-swig');


//输出test
gulp.task('test', function () {
    return console.log('this is a test.');
});


//拷贝tpl下模板文件到dist下
gulp.task('copy', function () {
    return gulp.src('src/tpl/*.html')
    .pipe(gulp.dest('dist'));
});

//创建一个css处理任务
gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest('dist/static'));
});

gulp.task('css', function () {
    return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/static/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/static/js'));
});

gulp.task('html', function () {
    return gulp.src('src/tpl/*.html')
    .pipe(gulp.dest('dist'));
});

//一次执行多个任务
gulp.task('build', ['css', 'js', 'html']);