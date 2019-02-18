var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('footer', function (done) {
    gulp.src('src/app/components/shared/footer/footer-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:footer',  gulp.series('footer', function(done){
	gulp.watch('src/app/components/shared/footer/footer-section.html', gulp.series('footer'));
	done();
}));