var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('skills', function () {
    gulp.src('src/app/components/homePage/skills/skills-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:skills', ['skills'], function(){
	gulp.watch('src/app/components/homePage/skills/skills-section.html', ['skills']);
});