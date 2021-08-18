// list dependencies
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");

// Optional if you want to minify
// const minify = require("gulp-clean-css");
// const rename = require("gulp-rename");

// function
function compilescss() {
  return src("./scss/style.scss", {sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 3 versions'))
    .pipe(dest("./css", { sourcemaps: '.'}));
    // .pipe(minify())
    // .pipe(
    //   rename(function (path) {
    //     return {
    //       dirname: path.dirname + "",
    //       basename: path.basename + ".css",
    //       extname: ".css",
    //     };
    //   })
    // )
}

// watchtask
function watchTask() {
  watch("./scss/**/*.scss", compilescss);
}

// default gulp
exports.default = series(compilescss, watchTask);
