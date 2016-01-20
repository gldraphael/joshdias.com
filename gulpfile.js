var gulp = require('gulp'),
    cssmin = require("gulp-cssmin"),
    concat = require("gulp-concat"),
    autoprefixer = require('gulp-autoprefixer'),
    path = require('path');

var paths = {
    devCss: "_devassets/css/",
    productionCss: "css/",
};

// Bundles and minifies the CSS files for production
gulp.task('publish', function () {
    return gulp.src(path.join(paths.devCss, '/**/*.css'))
            .pipe(concat('site.min.css'))
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: true,
                remove: false
            }))
            .pipe(cssmin())
            .pipe(gulp.dest(paths.productionCss));
});