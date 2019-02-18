var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('post', function (done) {
    gulp.src('src/app/components/blogsPage/post/post.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:post',  gulp.series('post', function(done){
	gulp.watch('src/app/components/blogsPage/post/post.html', gulp.series('post'));
	done();
}));