var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var pump = require('pump');

gulp.task('js', function (cb) {
	gulp.src(['src/app/modules.js', 'src/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public'));
		console.log("js: gulp");
});

gulp.task('watch:js', ['js'], function(){
	gulp.watch('src/app/**/*.js', ['js'])
});