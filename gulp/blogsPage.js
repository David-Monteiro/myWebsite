var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('blogsPage', function () {
    gulp.src('src/app/components/blogsPage/blogs.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
});

gulp.task('watch:blogsPage', ['blogsPage'], function(){
	gulp.watch('src/app/components/blogsPage/blogs.html', ['blogsPage']);
});