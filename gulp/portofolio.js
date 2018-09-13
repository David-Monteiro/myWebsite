var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('portofolio', function () {
    gulp.src('src/app/components/homePage/portofolio/portofolio-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
});

gulp.task('watch:portofolio', ['portofolio'], function(){
	gulp.watch('src/app/components/homePage/portofolio/portofolio-section.html', ['portofolio']);
});