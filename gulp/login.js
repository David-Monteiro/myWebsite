var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('login', function () {
    gulp.src('src/app/components/login/login.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    console.log("login: gulp");
});

gulp.task('watch:login', ['login'], function(){
	gulp.watch('src/app/components/login/login.html', ['login'])
	console.log("watch login: gulp");
});