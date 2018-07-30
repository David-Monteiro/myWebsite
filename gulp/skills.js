var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('skills', function () {
    gulp.src('src/app/components/skills/skills-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("skills: gulp");
});

gulp.task('watch:skills', ['skills'], function(){
	gulp.watch('src/app/components/skills/skills-section.html', ['skills'])
	console.log("watch skills: gulp");
});