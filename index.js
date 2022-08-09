var http = require("http"); 
http.createServer(function(req,res) { // request
  var path = req.url.toLowerCase(); // turns path to lowercase
  switch(path) { // allows us to see different outputs
    case '/': 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Home page');
      break;
    case '/about': // we see about page
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found'); // not found will appear
      break;
    }
}).listen(process.env.PORT || 3000);
