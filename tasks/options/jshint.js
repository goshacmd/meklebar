module.exports = {
  app: {
    src: [
      'app/**/*.js'
    ],
    options: { jshintrc: '.jshintrc' }
  },

  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: { jshintrc: 'tasks/.jshintrc' }
  },

  options: {
    force: true
  }
};
