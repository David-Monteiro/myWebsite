var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('homePage', function (done) {
    gulp.src('src/app/components/homePage/homePage.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    done();
});
    
gulp.task('watch:homePage',  gulp.series('homePage', function(done){
	gulp.watch('src/app/components/homePage/homePage.html', gulp.series('homePage'));
	done();
}));