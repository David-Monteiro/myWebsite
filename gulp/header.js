var gulp = require('gulp');
var htmlMinify = require("gulp-html-minify");

gulp.task('header', function (done) {
    gulp.src('src/app/components/homePage/header/header-section.html')
    .pipe(htmlMinify())
    .pipe(gulp.dest('public/templates'));
    done();
});

gulp.task('watch:header',  gulp.series('header', function(done){
	gulp.watch('src/app/components/homePage/header/header-section.html', gulp.series('header'));
	done();
}));