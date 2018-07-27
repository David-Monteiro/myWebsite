var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('css', function () {
	gulp.src('src/assets/css/**/*.styl')
		.pipe(concat('app.css'))
		.pipe(stylus({ compress: true }))
		.pipe(gulp.dest('public'));
	console.log("css: gulp");
});

gulp.task('watch:css', ['css'],  function(){
	gulp.watch('src/assets/css/*.styl', ['css']);
	console.log("watchcss: gulp");
});
