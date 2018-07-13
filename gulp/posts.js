var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('posts', function () {
    gulp.src('src/app/components/posts/posts.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    console.log("posts: gulp");
});

gulp.task('watch:posts', ['posts'], function(){
	gulp.watch('src/app/components/posts/posts.html', ['posts'])
	console.log("watch posts: gulp");
});