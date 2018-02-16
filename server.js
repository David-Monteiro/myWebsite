var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log('Something is happening');
    next();
});

////////////Simple//Requests/////////////

var Post = require('.models/post');
    /*GET method*/
app.get('/', function (req, res) {
  //res.send('GET request success');
  //or
  console.log('GET request success');
  res.json({ message: 'JSON GET request success' });
})

    /*POST method*/
app.post('/', function (req, res) {
  //res.send('POST request success');
  //or
  console.log('POST request success');
  res.json({ message: 'JSON POST request success' });
})

//////////////////////////////////////

app.listen(3000, function () {
    console.log('Server listening on', 3000);
})
