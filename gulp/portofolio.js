var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('portofolio', function () {
    gulp.src('src/app/components/portofolio/portofolio-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    console.log("portofolio: gulp");
});

gulp.task('watch:portofolio', ['portofolio'], function(){
	gulp.watch('src/app/components/portofolio/portofolio-section.html', ['portofolio'])
	console.log("watch portofolio: gulp");
});