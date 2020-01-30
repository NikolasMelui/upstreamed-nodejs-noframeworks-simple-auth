const http = require('http');

const { server } = require('./config');

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server is working');
  })
  .listen(server.port, server.hostname, () =>
    console.log(`Server running at http://${server.hostname}:${server.port}`),
  );
