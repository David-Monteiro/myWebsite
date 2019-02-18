var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('skills', function (done) {
    gulp.src('src/app/components/homePage/skills/skills-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:skills',  gulp.series('skills', function(done){
	gulp.watch('src/app/components/homePage/skills/skills-section.html', gulp.series('skills'));
	done();
}));