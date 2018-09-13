var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('html', function () {
    gulp.src('./src/index.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
});

gulp.task('watch:html', ['html'], function(){
	gulp.watch('src/index.html', ['html']);
});