var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function () {
	gulp.src('src/assets/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('public'));
});