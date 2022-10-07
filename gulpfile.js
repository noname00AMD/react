var gulp = require("gulp")
var sourcemaps = require('gulp-sourcemaps');
var sass = require("gulp-sass")(require("sass"))
var browsersync = require("browser-sync").create()

gulp.task("sass", function () {
  return gulp.src('./src/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(['./src/styles/']))
})

gulp.watch("./sass/", gulp.series(["sass"]))
gulp.task("default", gulp.series(["sass"]))

