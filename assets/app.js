var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');node

var mimetype = {
  'txt': 'text/plain',
  'html': 'text/html',
  'css': 'text/css',
  'xml': 'application/xml',
  'json': 'application/json',
  'js': 'application/javascript',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'gif': 'image/gif',
  'png': 'image/png',
  'svg': 'image/svg+xml'
}

var fs = require('fs');
fs.exists(realPath, function(exists){
    if(!exists){

        return page_404(req, res, pathname);

    } else {
        var file = fs.createReadStream(realPath);

        res.writeHead(200, {
            'Content-Type': mimetype[realPath.split('.').pop()] || 'text/plain'
        });

        file.on('data', res.write.bind(res));
        file.on('close', res.end.bind(res));
        file.on('error', function(err){
            return page_500(req, res, err);
        });
    }
});