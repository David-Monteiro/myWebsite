var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('posts', function () {
    gulp.src('./src/app/components/login/login.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    console.log("posts: gulp");
});

gulp.task('watch:html', ['html'], function(){
	gulp.watch('src/app/components/login/login.html', ['posts'])
	console.log("watch posts: gulp");
});