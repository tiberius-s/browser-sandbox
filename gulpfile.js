const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');

// initialize the variables needed
const bundler = browserify({
    entries: ['./app/src/js/app.js'],
    debug: true
});
const watcher = watchify(bundler);

// bundle the code
function bundleApp () {
    return bundler.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/js'))
        .pipe(browserSync.stream({once: true}));
}

//update the bundle on change
watcher.on('update', bundleApp);

// bundle the main app
gulp.task('bundle', bundleApp);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("app/src/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'bundle'], function() {

    browserSync.init({
        server: "./app",
        routes: {
            './node_modules': 'node_modules'
        }
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);