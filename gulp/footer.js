var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('footer', function () {
    gulp.src('src/app/components/shared/footer/footer-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("footer: gulp");
});

gulp.task('watch:footer', ['footer'], function(){
	gulp.watch('src/app/components/shared/footer/footer-section.html', ['footer'])
	console.log("watch footer: gulp");
});