var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('resumePage', function (done) {
    gulp.src('src/app/components/resumePage/resumePage.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public'));
    done();
});
    
gulp.task('watch:resumePage',  gulp.series('resumePage', function(done){
	gulp.watch('src/app/components/resumePage/resumePage.html', gulp.series('resumePage'));
	done();
}));