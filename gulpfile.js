var gulp = require('gulp');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var paths = {
	scripts: ['scripts/**/*.js']
}

gulp.task('default', function() {

});

gulp.task('test', shell.task([
	'karma start'
]));

gulp.task('lint', function(){
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('serve', function(){
	nodemon({ script: 'server.js', ignore: 'node_modules/**/*.js' })
	  .on('restart', function(){
	  	console.log('Server restarted!!!');
	  })
});

gulp.task('watch', function(){
	gulp.watch(paths.scripts, ['lint'])
});