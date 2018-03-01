var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
	gulp.src(['src/app/modules.js', 'src/app/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('public'));
});