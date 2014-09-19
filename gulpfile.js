var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function() {

});

gulp.task('karma', shell.task([
	'karma start'
]))