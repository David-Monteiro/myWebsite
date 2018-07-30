var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('homePage', function () {
    gulp.src('src/app/components/homePage/homePage.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    console.log("homePage: gulp");
});
    
gulp.task('watch:homePage', ['homePage'], function(){
	gulp.watch('src/app/components/homePage/homePage.html', ['homePage'])
	console.log("watch homePage: gulp");
});