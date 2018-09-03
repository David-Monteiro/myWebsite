var gulp = require('gulp');

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp')
  .forEach(function(task){
    require('./gulp/' + task);
});

gulp.task('dev', 
	[
		'watch:html', 
		'watch:post', 
		'watch:login',
		'watch:register',
		'watch:navBar',
		'watch:footer',
		'watch:header',
		'watch:skills',
		'watch:portofolio',
		'watch:homePage',
		'watch:blogs',
		'watch:resume',
		'watch:resumePage',
		'watch:sideBar',
		'watch:modal',
		'watch:css', 
		'watch:js', 
		'dev:server'
	]
);