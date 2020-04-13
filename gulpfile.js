const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cssimport = require("gulp-cssimport"),
  replace = require('gulp-replace'),
  cssbeautify = require('gulp-cssbeautify');

const sassFiles = "projects/ng-library/src/styles.scss",
  baseDest = "dist/ng-library",
  fontDest = `${baseDest}/fonts`,
  cssDest = `${baseDest}`,
  imgDest = `${baseDest}/images`;

function styles() {
  return gulp
    .src(sassFiles)
    .pipe(sass.sync({ includePaths: ['node_modules'] }).on("error", sass.logError))
    .pipe(cssimport({ includePaths: ['node_modules'] }))
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(replace("../fonts", "./fonts"))
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(gulp.dest(cssDest));
}

function moveStyles() {
  return gulp.src(['projects/ng-library/src/styles/**.scss']).pipe(gulp.dest(`${cssDest}/styles`));
}

function font() {
  return gulp.src([
    'node_modules/font-awesome/fonts/**/*',
    'projects/ng-library/src/assets/fonts/**/*',
    'node_modules/primeng/resources/themes/nova-dark/fonts/**/*',
    'node_modules/primeicons/fonts/**/*'
  ])
    .pipe(gulp.dest(fontDest));
}

function images() {
  return gulp.src([
    'node_modules/primeng/resources/images/*'
  ])
    .pipe(gulp.dest(imgDest));
}

function moveReadme() {
  return gulp.src(['README.md']).pipe(gulp.dest(baseDest));
}

function moveLicense() {
  return gulp.src('LICENSE').pipe(gulp.dest(baseDest));
}

const defaultTask = gulp.parallel(styles, font, images, moveStyles, moveReadme, moveLicense);

exports.default = defaultTask;
