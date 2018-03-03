var gulp = require('gulp');

gulp.task('watch:js', ['js'], function(){
	gulp.watch('src/app/**/*/js', ['js'])
});

gulp.task('watch:css', function(){
	gulp.watch('src/assets/css/*.styl', ['css'])
});

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp')
  .forEach(function(task){
    require('./gulp/' + task);
});

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server']);