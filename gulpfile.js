const gulp = require("gulp"),
  git = require("gulp-git"),
  directoryExists = require('directory-exists'),
  config = {
    utils: {
      repoUrl: "https://github.com/nimjetushar/Utils.git",
      path: "./projects/utils"
    },
    grid: {
      repoUrl: "https://github.com/nimjetushar/grid-css.git",
      path: "./projects/grid"
    }
  };

function setupRepo(done) {
  directoryExists(this.path, (error, result) => {
    console.log(result); // result is a boolean
    if (result) {
      done();
    } else {
      git.clone(this.repoUrl, {
        args: this.path
      }, done);
    }
  });
}

const defaultTask = gulp.series(setupRepo.bind(config.utils), setupRepo.bind(config.grid));

exports.default = defaultTask;
