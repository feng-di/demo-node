var http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'})
  res.end('Hello world\n')
}).listen(8889, '127.0.0.1')
