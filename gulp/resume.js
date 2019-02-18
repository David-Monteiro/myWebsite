var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('resume', function (done) {
    gulp.src('src/app/components/resumePage/resume/resume-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:resume',  gulp.series('resume', function(done){
	gulp.watch('src/app/components/resumePage/resume/resume-section.html', gulp.series('resume'));
	done();
}));