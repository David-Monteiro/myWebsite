var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('navBar', function (done) {
    gulp.src('src/app/components/shared/navBar/navBar.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:navBar', gulp.series('navBar', function(done){
	gulp.watch('src/app/components/shared/navBar/navBar.html', gulp.series('navBar'));
	done();
}))