var gulp = require('gulp');
var g = require('gulp-load-plugins')({lazy: false});
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var opn = require('opn');
var karma = require('karma').server;
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
	scripts: ['scripts/**/*.js'],
	karmaTestFiles: 'scripts/**/*.spec.js',
	karmaConfigFile: 'karma.conf.js',
	concatFiles: ['./scripts/app.js', './scripts/**/*.controller.js', './scripts/**/*.services.js'],
  dist: './dist/all.js',
	uglifyFiles: ['dist/app.js', 'dist/**/*.controller.js', 'dist/**/*.services.js']
}

gulp.task('default', function() {

});

gulp.task('inject', function(){
	var target = gulp.src('./index.html');
	var js = gulp.src(paths.concatFiles, {read: false});
	return target
	.pipe(g.inject(js, {
		addRootSlash: false,
		name: 'angularfiles'
	}))
	.pipe(gulp.dest('./'))
});

gulp.task('openbrowser', function() {
  return opn( 'http://localhost:8000/' );
});

gulp.task('test', function (done) {
 karma.start({
  configFile: __dirname + '/karma.conf.js',
  singleRun: true
 }, done);
});

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
	gulp.watch('scripts/**', ['lint', 'test'])
});

gulp.task('inject_prod', function(){
  var target = gulp.src('./index.html');
  var js = gulp.src(paths.dist, {read: false});
  return target
  .pipe(g.inject(js, {
    addRootSlash: false,
    name: 'angularfiles'
  }))
  .pipe(gulp.dest('./'))
});

gulp.task('flatten', function(){

  return gulp.src(paths.concatFiles)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))

});


gulp.task('deploy', ['flatten'], function(callback){
  g.runSequence('inject_prod', callback);
});

gulp.task('build', ['lint', 'inject', 'serve', 'test', 'openbrowser', 'watch']);
