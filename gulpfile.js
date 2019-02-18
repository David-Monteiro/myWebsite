var gulp = require('gulp');

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp')
  .forEach(function(task){
    require('./gulp/' + task);
});


 gulp.task('build', gulp.parallel(
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
	'js')
);



gulp.task('watch', gulp.parallel(
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
	'watch:js')
);


gulp.task('dev', gulp.series(
	'watch',
	'dev:server')
);