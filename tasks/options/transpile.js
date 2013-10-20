var grunt = require('grunt');

module.exports = {
  "app": {
    type: 'amd',
    moduleName: function(path) {
      return grunt.config.process('<%= package.namespace %>/') + path;
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascript/app/',
      src: '**/*.js',
      dest: 'tmp/transpiled/app/'
    }]
  }
};
