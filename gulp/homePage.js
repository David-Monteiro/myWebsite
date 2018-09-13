var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('homePage', function () {
    gulp.src('src/app/components/homePage/homePage.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
});
    
gulp.task('watch:homePage', ['homePage'], function(){
	gulp.watch('src/app/components/homePage/homePage.html', ['homePage']);
});