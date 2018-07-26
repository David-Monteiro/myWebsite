var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('header', function () {
    gulp.src('src/app/components/shared/header/header-bar.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("header: gulp");
});

gulp.task('watch:header', ['header'], function(){
	gulp.watch('src/app/components/shared/header/header-bar.html', ['header'])
	console.log("watch header: gulp");
});