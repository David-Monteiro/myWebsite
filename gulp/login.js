var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('login', function (done) {
    gulp.src('src/app/components/shared/session/login.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:login',  gulp.series('login', function(done){
	gulp.watch('src/app/components/shared/session/login.html', gulp.series('login'));
	done();
}));