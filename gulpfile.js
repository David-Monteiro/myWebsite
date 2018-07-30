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
		'watch:navBar',
		'watch:footer',
		'watch:header',
		'watch:skills',
		'watch:portofolio',
		'watch:homePage',
		'watch:css', 
		'watch:js', 
		'dev:server'
	]
);