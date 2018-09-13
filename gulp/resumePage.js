var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('resumePage', function () {
    gulp.src('src/app/components/resumePage/resumePage.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
});
    
gulp.task('watch:resumePage', ['resumePage'], function(){
	gulp.watch('src/app/components/resumePage/resumePage.html', ['resumePage']);
});