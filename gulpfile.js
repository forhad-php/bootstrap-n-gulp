/*
1. require gulp
2. Requires the "gulp-sass" plugin
3. Requires the "gulp-minify-css" plugin
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
// var minifyCss = require('gulp-minify-css');

/*
Uncomment two of files below to get a minifyed version
1. "var minifyCss = require('gulp-minify-css');"
2. ".pipe(minifyCss({ compatibility: 'ie9' }))"
and also change the path to avoid replace normal css code
*/
gulp.task('sass', function () { // task name is 'sass' so we  are using comand 'gulp sass'
    return gulp.src('scss/style.scss') // path of .SCSS which want to convert
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        // .pipe(minifyCss({ compatibility: 'ie9' })) // make a minified version with ie9 compatibility
        .pipe(gulp.dest('css')) // path of .CSS which will be conver
    // the folder and css file will create automatically
})

// Create a gulp watch
gulp.task('watch', function () { // the task name is 'watch' so we have to using comand 'gulp watch'
    gulp.watch('scss/*.scss', gulp.series('sass'));
});