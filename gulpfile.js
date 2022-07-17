const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const flatten = require("gulp-flatten");

gulp.task("static", () => {
  return gulp
    .src("node_modules/@fortawesome/**/css/all.css")
    .pipe(flatten())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("styles", () => {
  return gulp
    .src("assets/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("clean", () => {
  return del(["./assets/css"]);
});

gulp.task("default", gulp.series(["clean", "static", "styles"]));
