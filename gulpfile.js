var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss') // Gets all files ending in .scss
  .pipe(sass()) // Using gulp-sass
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.watch('app/scss/**/*.scss', ['sass']);
// Other watchers
gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
