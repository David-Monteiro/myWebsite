var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function () {
	gulp.src('src/assets/css/*.styl')
		.pipe(stylus({ compress: true }))
		.pipe(gulp.dest('public'));
	console.log("css: gulp");
});

gulp.task('watch:css', ['css'],  function(){
	gulp.watch('src/assets/css', ['css']);
	console.log("watchcss: gulp");
});
