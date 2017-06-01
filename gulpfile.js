const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const paths = {
	css: {
		entry: 'src/scss/slidecss.scss',
		dest: 'lib'
	},
	html: {
		entry: 'src/index.html',
		dest: 'lib'
	}
};

gulp.task('build-css', ['build-normal-css', 'build-min-css']);

gulp.task('build-normal-css', _ => {
	return gulp.src(paths.css.entry)
			.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
			.pipe(gulp.dest(paths.css.dest));
	})

gulp.task('build-min-css', _ => {
	return gulp.src(paths.css.entry)
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(rename('slidecss.min.css'))
			.pipe(gulp.dest(paths.css.dest));
	})

gulp.task('move-html', _ => {
	return gulp.src(paths.html.entry)
			.pipe(gulp.dest(paths.html.dest));
	})

gulp.task('build', ['move-html', 'build-css']);