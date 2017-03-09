var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/beer', function(req, res) {
  console.log("beer");  
});

app.listen(8000, function() {
  console.log("beer list project. Listening on 8000.")

});
