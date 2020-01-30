const { getUsers, getUserIgor } = require('./services');

module.exports = {
  get: {
    '/': () => 'Hello from the server',
    '/users': getUsers,
    '/users/igor': getUserIgor,
    'favicon.ico': () => 'Another one fucker',
  },
  // post: path => path,
  // put: path => path,
  // delete: path => path,
};
