const gulp = require('gulp');
const image = require("gulp-image");

gulp.task('image', function () {
    gulp.src('src/assets/images/*.jpg')
    .pipe(image())
    .pipe(gulp.dest('public/images'));
});

gulp.task('watch:image', ['image'], function(){
	gulp.watch('src/assets/images/*.jpg', ['image']);
});