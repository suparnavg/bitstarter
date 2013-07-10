var express = require('express');
var fs = require('fs');
var buffer = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  var filebuf = fs.readFileSync('index.html');
//  var str = buffer.toString(filebuf);
  response.send(fs.readFileSync('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
