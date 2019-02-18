var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var pump = require('pump');

gulp.task('js', function (done) {
	gulp.src(['src/app/module.js', 'src/app/routes.js', 'src/app/components/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public'));
		done();		
});

gulp.task('watch:js',  gulp.series('js', function(done){
	gulp.watch('src/app/**/*.js', gulp.series('js'));
	done();
}));