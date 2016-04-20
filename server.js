var express = require('express');
var app = express();
var middleware = require('./middleware.js'); 
const PORT = process.env.PORT || 3000;




app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send("This is an about page");
});

app.use(express.static(__dirname + '/public'));




app.listen(PORT, function(){
  console.log("express server started on port " + PORT);
});
