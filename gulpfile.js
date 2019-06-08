const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer");

const AUTOPREFIXER_BROWSERS = [
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.4",
  "bb >= 10"
];

const sassFiles = "projects/ui-library/src/styles.scss",
  baseDest = "dist/ui-library",
  fontDest = `${baseDest}/fonts`,
  cssDest = `${baseDest}/styles`;

function styles() {
  return gulp
    .src(sassFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    .pipe(gulp.dest(cssDest));
}

function moveStyles() {
  return gulp.src(['projects/ui-library/src/lib/styles/**.scss']).pipe(gulp.dest(cssDest));
}

function font() {
  return gulp.src([
    'node_modules/font-awesome/fonts/**/*',
    'projects/ui-library/src/lib/assets/fonts/**/*'
  ])
    .pipe(gulp.dest(fontDest));
}

const defaultTask = gulp.parallel(styles, font, moveStyles);

exports.default = defaultTask;
