var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('post', function () {
    gulp.src('src/app/components/blogsPage/post/post.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:post', ['post'], function(){
	gulp.watch('src/app/components/blogsPage/post/post.html', ['post']);
});