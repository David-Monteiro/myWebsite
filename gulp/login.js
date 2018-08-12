var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('login', function () {
    gulp.src('src/app/components/session/login.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("login: gulp");
});

gulp.task('watch:login', ['login'], function(){
	gulp.watch('src/app/components/session/login.html', ['login'])
	console.log("watch login: gulp");
});