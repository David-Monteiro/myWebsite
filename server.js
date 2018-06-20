var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


app.use(require('./routes/api/posts'));
app.use(require('./routes/static'));
app.use('/api/sessions',
    require('/controller/api/sessions'));
app.use('/api/users',
    require('/controller/api/users'));


app.listen(3000, function () {
    console.log('Server listening on', 3000);
})
