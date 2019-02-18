var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('modal', function (done) {
    gulp.src('src/app/components/shared/session/modal.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:modal',  gulp.series('modal', function(done){
	gulp.watch('src/app/components/shared/session/modal.html', gulp.series('modal'));
	done();
}));