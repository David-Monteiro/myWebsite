var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('resume', function () {
    gulp.src('src/app/components/resume/resume-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("resume: gulp");
});

gulp.task('watch:resume', ['resume'], function(){
	gulp.watch('src/app/components/resume/resume-section.html', ['resume'])
	console.log("watch resume: gulp");
});