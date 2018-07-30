var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('header', function () {
    gulp.src('src/app/components/header/header-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("header: gulp");
});

gulp.task('watch:header', ['header'], function(){
	gulp.watch('src/app/components/header/header-section.html', ['header'])
	console.log("watch header: gulp");
});