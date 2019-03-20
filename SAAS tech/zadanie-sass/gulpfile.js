let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
     .pipe(sass())
     .pipe(gulp. dest('app/css')); 
});

gulp.task('watch', () => { 
    gulp.watch('app/scss/**/*.scss',gulp.series('sass'));
});