var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('blogsPage', function (done) {
    gulp.src('src/app/components/blogsPage/blogs.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    done();
});

gulp.task('watch:blogsPage',  gulp.series('blogsPage', function(done){
	gulp.watch('src/app/components/blogsPage/blogs.html', gulp.series('blogsPage'));
	done();
}));