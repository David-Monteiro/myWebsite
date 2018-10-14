var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


app.use(require('./routes/api/posts'));
app.use(require('./routes/static'));
app.use(require('./routes/api/sessions'));
app.use(require('./routes/api/users'));


var server = app.listen(process.env.PORT || 3000, function () {
    console.log('server listening on %d', server.address().port);
})
