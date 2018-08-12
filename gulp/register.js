var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('register', function () {
    gulp.src('src/app/components/session/register.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("register: gulp");
});

gulp.task('watch:register', ['register'], function(){
	gulp.watch('src/app/components/session/register.html', ['register'])
	console.log("watch register: gulp");
});