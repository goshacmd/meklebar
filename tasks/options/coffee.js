// CoffeeScript compilation. This must be enabled by modification
// of Gruntfile.js.
//
// The `bare` option is used since this file will be transpiled
// anyway. In CoffeeScript files, you need to escape out for
// some ES6 features like import and export. For example:
//
// `import User from 'appkit/models/user'`
//
// Post = Em.Object.extend
//   init: (userId) ->
//     @set 'user', User.findById(userId)
//
// `export default Post`
//

module.exports = {
  "app": {
    options: {
      bare: true
    },
    files: [{
      expand: true,
      cwd: 'app/',
      src: '**/*.coffee',
      dest: 'tmp/javascript/app',
      ext: '.js'
    }]
  }
};
