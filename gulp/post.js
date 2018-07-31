var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('post', function () {
    gulp.src('src/app/components/blogs/post.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("post: gulp");
});

gulp.task('watch:post', ['post'], function(){
	gulp.watch('src/app/components/blogs/post.html', ['post'])
	console.log("watch post: gulp");
});