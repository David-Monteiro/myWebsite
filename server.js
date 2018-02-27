var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


app.use(require('./routes/api/posts'));
app.use(require('./routes/static'));


app.listen(3000, function () {
    console.log('Server listening on', 3000);
})
