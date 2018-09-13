var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('modal', function () {
    gulp.src('src/app/components/shared/session/modal.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:modal', ['modal'], function(){
	gulp.watch('src/app/components/shared/session/modal.html', ['modal']);
});