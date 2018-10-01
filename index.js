var express = require('express')

var app = express();
var port = 3000;

app.listen(port, function(){
    console.log("Express app listening on port " + port);
});

app.get('/items', function(request, response){
    response.send('Hello, World');
});

app.post('/items', function(request, response){
    response.send('Hello, Express');
});

app.put('/items', function(request, response){

});

app.delete('/items', function(request, response){

});