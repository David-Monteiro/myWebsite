var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('login', function () {
    gulp.src('src/app/components/shared/session/login.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:login', ['login'], function(){
	gulp.watch('src/app/components/shared/session/login.html', ['login']);
});