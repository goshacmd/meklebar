var Helpers = require('../helpers');

module.exports = {
  main: {
    files: ['app/**/*', 'public/**/*', 'vendor/**/*'],
    tasks: ['build:debug']
  },
  options: {
    debounceDelay: 200,
    livereload: Helpers.isPackageAvailable("connect-livereload")
  }
};
