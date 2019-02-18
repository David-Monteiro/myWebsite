var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('css', function (done) {
	gulp.src('src/assets/css/**/*.styl')
		.pipe(concat('app.css'))
		.pipe(stylus({ compress: true }))
		.pipe(gulp.dest('public'));
		done();
});

gulp.task('watch:css',  gulp.series('css',  function(done){
	gulp.watch('src/assets/css/*.styl', gulp.series('css'));
	done();
}));
