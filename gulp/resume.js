var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('resume', function () {
    gulp.src('src/app/components/resumePage/resume/resume-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:resume', ['resume'], function(){
	gulp.watch('src/app/components/resumePage/resume/resume-section.html', ['resume']);
});