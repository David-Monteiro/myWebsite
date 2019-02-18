var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('register', function (done) {
    gulp.src('src/app/components/shared/session/register.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:register',  gulp.series('register', function(done){
	gulp.watch('src/app/components/shared/session/register.html', gulp.series('register'));
	done();
}));