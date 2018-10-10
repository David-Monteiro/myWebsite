var gulp = require('gulp');

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp')
  .forEach(function(task){
    require('./gulp/' + task);
});

gulp.task('dev', 
	[
		'watch:image',
		'watch:html',
		'watch:homePage',
		'watch:blogsPage',
		'watch:resumePage',
		'watch:modal', 
		'watch:login',
		'watch:register',
		'watch:navBar',
		'watch:footer',
		'watch:header',
		'watch:skills',
		'watch:portofolio',
		'watch:resume',
		'watch:sideBar',
		'watch:post',
		'watch:css', 
		'watch:js', 
		'dev:server'
	]
);