var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(){
  console.log('Now listening to ', port);
});