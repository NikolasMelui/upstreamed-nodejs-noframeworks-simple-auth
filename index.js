const http = require('http');
const { server } = require('./config');
const handler = require('./handler');

http
  .createServer(handler)
  .listen(server.port, server.hostname, () =>
    console.info(`Server running at http://${server.hostname}:${server.port}`),
  );
