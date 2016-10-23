var gulp = require('gulp');
var sass = require('gulp-sass');
var bSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

  bSync.init({
    server: "./app"
  });

  gulp.watch("app/src/scss/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', bSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("app/src/scss/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("app/css"))
    .pipe(bSync.stream());
});

gulp.task('default', ['serve']);