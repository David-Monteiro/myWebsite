var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('sideBar', function (done) {
    gulp.src('src/app/components/resumePage/sideBar/sideBar.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:sideBar',  gulp.series('sideBar', function(done){
	gulp.watch('src/app/components/resumePage/sideBar/sideBar.html', gulp.series('sideBar'));
	done();
}));