var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('modal', function () {
    gulp.src('src/app/components/session/modal.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("modal: gulp");
});

gulp.task('watch:modal', ['modal'], function(){
	gulp.watch('src/app/components/session/modal.html', ['modal'])
	console.log("watch modal: gulp");
});