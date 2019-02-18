var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('portofolio', function (done) {
    gulp.src('src/app/components/homePage/portofolio/portofolio-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:portofolio',  gulp.series('portofolio', function(done){
	gulp.watch('src/app/components/homePage/portofolio/portofolio-section.html', gulp.series('portofolio'));
	done();
}));