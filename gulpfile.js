var gulp = require('gulp');

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp')
  .forEach(function(task){
    require('./gulp/' + task);
});

gulp.task('dev', 
	[
		'watch',
		'dev:server'
	]
);

gulp.task('watch', [
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
		'watch:js'
	]
);

gulp.task('build', [
		'image',
		'html',
		'homePage',
		'blogsPage',
		'resumePage',
		'modal', 
		'login',
		'register',
		'navBar',
		'footer',
		'header',
		'skills',
		'portofolio',
		'resume',
		'sideBar',
		'post',
		'css', 
		'js'
	]
);