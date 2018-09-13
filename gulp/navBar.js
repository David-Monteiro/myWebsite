var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('navBar', function () {
    gulp.src('src/app/components/shared/navBar/navBar.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:navBar', ['navBar'], function(){
	gulp.watch('src/app/components/shared/navBar/navBar.html', ['navBar']);
});