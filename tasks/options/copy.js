module.exports = {
  // These copy tasks happen before transpile or hinting. They
  // prepare the build pipeline by moving JavaScript files to
  // tmp/javascript.
  //
  "prepare": {
    files: [{
      expand: true,
      cwd: 'app/',
      src: '**/*.js',
      dest: 'tmp/javascript/app'
    }]
  },
  // Stage moves files to their final destinations after the rest
  // of the build cycle has run.
  //
  "stage": {
    files: [{
      expand: true,
      cwd: 'public/',
      src: ['**'],
      dest: 'tmp/public/'
    }]
  },
  "vendor": {
    src: ['vendor/**/*.js', 'vendor/**/*.css', 'vendor/**/*.{eot,svg,tff,woff}'],
    dest: 'tmp/public/'
  },
  "dist": {
    files: [{
      expand: true,
      cwd: 'tmp/public',
      src: ['**', '!coverage'],
      dest: 'dist/'
    }]
  },
};
