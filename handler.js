const router = require('./router');

module.exports = async (req, res) => {
  try {
    const { method, url } = req;
    const handler = router[method.toLowerCase()][url.toLowerCase()];

    if (typeof handler === 'undefined') {
      res.statusCode = 401;
      res.end('There is no such router');
    }

    const handlerResult = await handler();
    const result =
      typeof handlerResult === 'object'
        ? JSON.stringify(handlerResult)
        : String(handlerResult);

    res.end(result);
  } catch (err) {
    console.error(err);
    res.statusCode = 200;
    res.end("Sorry, we've got an error!");
  }
};
