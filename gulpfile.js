const gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  cssimport = require('gulp-cssimport'),
  replace = require('gulp-replace'),
  cssbeautify = require('gulp-cssbeautify'),
  bump = require('gulp-bump');

const exec = require('child_process').exec;

const sassFiles = 'libs/ng-library/src/lib/styles.scss',
  baseDest = 'dist/ng-library',
  fontDest = `${baseDest}/fonts`,
  cssDest = `${baseDest}`,
  imgDest = `${baseDest}/images`,
  libraryDist = '../ui-library-demo/node_modules/@fourjs/ng-library';

function styles() {
  return gulp
    .src(sassFiles)
    .pipe(
      sass.sync({ includePaths: ['node_modules'] }).on('error', sass.logError)
    )
    .pipe(cssimport({ includePaths: ['node_modules'] }))
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(replace('../fonts', './fonts'))
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(gulp.dest(cssDest));
}

function moveStyles() {
  return gulp
    .src(['projects/ng-library/src/styles/**.scss'])
    .pipe(gulp.dest(`${cssDest}/styles`));
}

function font() {
  return gulp
    .src([
      'projects/ng-library/src/assets/fonts/**/*',
    ])
    .pipe(gulp.dest(fontDest));
}

function moveReadme() {
  return gulp.src(['README.md']).pipe(gulp.dest(baseDest));
}

function moveLicense() {
  return gulp.src('LICENSE').pipe(gulp.dest(baseDest));
}

function executeBuild(cb) {
  return exec('ng build ng-library', (err) => {
    cb(err);
  });
}

function moveBuildFolder() {
  return gulp.src(['dist/ng-library/**/**.*']).pipe(gulp.dest(libraryDist));
}

function watchFiles() {
  return gulp.watch(
    ['projects/ng-library/src/**/*.*'],
    { ignoreInitial: false },
    gulp.series(executeBuild, defaultTask, moveBuildFolder)
  );
}

function cleanup() {
  return import('del').then((del) => {
    return del.deleteSync(`${libraryDist}/**`, {
      force: true,
    });
  });
}

function bumpVersion(cb) {
  const date = new Date(),
    year = date.toLocaleDateString('en', { year: '2-digit' }),
    version = `${year}.${date.getMonth() + 1}.${date.getDate()}`;

  gulp
    .src('./projects/ng-library/package.json')
    .pipe(bump({ version, key: 'version' }))
    .pipe(gulp.dest('./projects/ng-library/'), cb());
}

exports.watch = gulp.series(cleanup, watchFiles);
exports.bump = gulp.series(bumpVersion);

const defaultTask = gulp.parallel(
  styles,
  font,
  moveStyles,
  moveReadme,
  moveLicense
);

exports.default = defaultTask;
