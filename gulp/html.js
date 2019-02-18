var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('html', function (done) {
    gulp.src('./src/index.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    done();
});

gulp.task('watch:html',  gulp.series('html', function(done){
	gulp.watch('src/index.html', gulp.series('html'));
	done();
}));