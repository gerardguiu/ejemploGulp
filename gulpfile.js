var gulp = require('gulp'),
uglify = require('gulp-uglifyjs');

gulp.task('minificar', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('vendor'));
});