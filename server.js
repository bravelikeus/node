var express = require('express');
var app = express(); 
const port = 3000;


middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req, res, next) {
    var date = new Date().toString();
    console.log("Request: " + date + ' ' + req.method + ' ' + req.originalUrl);
    next(); 
  }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send("This is an about page");
});

app.use(express.static(__dirname + '/public'));




app.listen(port, function(){
  console.log("express server started on port " + port);
});
