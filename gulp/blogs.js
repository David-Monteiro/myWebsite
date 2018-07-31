var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('blogs', function () {
    gulp.src('src/app/components/blogs/blogs.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    console.log("blogs: gulp");
});

gulp.task('watch:blogs', ['blogs'], function(){
	gulp.watch('src/app/components/blogs/blogs.html', ['blogs'])
	console.log("watch blogs: gulp");
});