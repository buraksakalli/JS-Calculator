'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "."
	});

	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch('*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);