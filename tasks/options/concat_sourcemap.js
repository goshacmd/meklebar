module.exports = {
  app: {
    src: ['tmp/transpiled/app/**/*.js'],
    dest: 'tmp/public/assets/app.js',
    options: {
      sourcesContent: true
    },
  }
};
