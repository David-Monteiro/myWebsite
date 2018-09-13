var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('sideBar', function () {
    gulp.src('src/app/components/resumePage/sideBar/sideBar.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:sideBar', ['sideBar'], function(){
	gulp.watch('src/app/components/resumePage/sideBar/sideBar.html', ['sideBar']);
});