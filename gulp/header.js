var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('header', function () {
    gulp.src('src/app/components/homePage/header/header-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:header', ['header'], function(){
	gulp.watch('src/app/components/homePage/header/header-section.html', ['header']);
});