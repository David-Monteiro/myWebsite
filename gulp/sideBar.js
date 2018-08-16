var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('sideBar', function () {
    gulp.src('src/app/components/sideBar/sideBar.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("sideBar: gulp");
});

gulp.task('watch:sideBar', ['sideBar'], function(){
	gulp.watch('src/app/components/sideBar/sideBar.html', ['sideBar'])
	console.log("watch sideBar: gulp");
});