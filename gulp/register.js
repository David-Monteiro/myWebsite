var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('register', function () {
    gulp.src('src/app/components/shared/session/register.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:register', ['register'], function(){
	gulp.watch('src/app/components/shared/session/register.html', ['register']);
});