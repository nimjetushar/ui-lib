const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer");

const sassFiles = "projects/ng-library/src/styles.scss",
  baseDest = "dist/ng-library",
  fontDest = `${baseDest}/fonts`,
  cssDest = `${baseDest}/styles`;

function styles() {
  return gulp
    .src(sassFiles)
    .pipe(sass.sync({ includePaths: ['node_modules'] }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDest));
}

function moveStyles() {
  return gulp.src(['projects/ng-library/src/lib/styles/**.scss']).pipe(gulp.dest(cssDest));
}

function font() {
  return gulp.src([
    'node_modules/font-awesome/fonts/**/*',
    'projects/ng-library/src/lib/assets/fonts/**/*'
  ])
    .pipe(gulp.dest(fontDest));
}

const defaultTask = gulp.parallel(styles, font, moveStyles);

exports.default = defaultTask;
