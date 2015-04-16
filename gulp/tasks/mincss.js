var gulp = require('gulp-help')(require('gulp'));
var minify = require('gulp-cssmin');
var stripComments = require('gulp-strip-comments');
var debug = require('gulp-debug');
var handleErrors = require('../util/handleErrors');

/**
 * NOTE: Excluding vendor.css from minifying. Weird stuff could happen
 */
var paths = {
	cssFiles: ['./leadpages-template/css/*.css', '!./leadpages-template/css/vendor.css'],
	dest: './build/dist/leadpages-template/css'
};

gulp.task('mincss', 'Minify CSS', function(cb){
	return gulp.src(paths.cssFiles)
		.pipe(debug({ title: 'Minifying: ' }))
		.pipe(stripComments())
			.on('error', handleErrors)
		.pipe(minify())
			.on('error', handleErrors)
    	.pipe(gulp.dest(paths.dest));
    cb();
});