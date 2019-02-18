var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev:server', function(done){
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: ['public*', 'gulp*'],
		done
	});
});