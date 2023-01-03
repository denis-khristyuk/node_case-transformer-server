const http = require('http');
const { convertToCase } = require('./convertToCase');

const createServer = () => {
  const server = http.createServer((req, res) => {
    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
    const toCase = normalizedURL.searchParams.get('toCase');
    const text = normalizedURL.pathname.slice(1);
    const result = convertToCase(text, toCase);

    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(result));
  });

  return server;
};

module.export = { createServer };
