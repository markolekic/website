const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css

function style() {
    // 1. where is my scss file
    return gulp.src('./scss/**/*.scss')
    // 2.pass that files through sass compiler
    .pipe(sass())
    // 3.where do i save de compiled CSS
    .pipe(gulp.dest('./css'))
    //4. stream changes to all browser
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
       server: {
        baseDir: './'
       }
    });
    //1. watch for css and styling 
    gulp.watch('./scss/**/*.scss', style);
    //2. watch for html
    gulp.watch('./*html').on('change', browserSync.reload);
    //3. watch for javascript file
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;