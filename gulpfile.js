var gulp = require('gulp');

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp')
  .forEach(function(task){
    require('./gulp/' + task);
});

gulp.task('dev', 
	[
		'watch:html', 
		'watch:posts', 
		'watch:login',
		'watch:register', 
		'watch:css', 
		'watch:js', 
		'dev:server'
	]
);