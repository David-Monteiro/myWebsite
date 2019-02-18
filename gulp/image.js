const gulp = require('gulp');
const image = require("gulp-image");

gulp.task('image', function (done) {
    gulp.src('src/assets/images/*.jpg')
    .pipe(image())
    .pipe(gulp.dest('public/images'));
    done();
});

gulp.task('watch:image',  gulp.series('image', function(done){
	gulp.watch('src/assets/images/*.jpg', gulp.series('image'));
	done();
}));