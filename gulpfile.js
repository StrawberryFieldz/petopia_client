var gulp = require('gulp');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var opn = require('opn');
var karma = require('karma').server;
var minifyCSS = require('gulp-minify-css');

var paths = {
	scripts: ['scripts/**/*.js'],
	karmaTestFiles: 'scripts/**/*.spec.js',
	karmaConfigFile: 'karma.conf.js',
	compressFiles: '<what files to uglify>',
	concatFiles: ['scripts/app.js', 'scripts/**/*.controller.js', 'scripts/**/*.services.js']
}

gulp.task('default', function() {

});

// rename
gulp.task('compress', function() {
  gulp.src(paths.compressFiles)
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

// rename
gulp.task('concat', function() {
  gulp.src(paths.concatFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('openbrowser', function() {
  opn( 'http://localhost:8000/' );
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
	gulp.watch(paths.scripts, ['lint'])
});

gulp.task('build', ['concat', 'serve', 'openbrowser']);