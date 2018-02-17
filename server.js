var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log('Something is happening');
    next();
});

var Post = require('./models/post');

////////////Simple//Requests/////////////

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

//////////Requests//for//Database////////

    /*POST method*/
var Post = require('./models/post');
app.post('/api/posts', function (req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });
    post.save(function (err, post) {
        if(err) { return next(err) }
        res.json(201, post)
    });
    console.log('POST request success');
});

    /*GET method*/
app.get('/api/posts', function (req, res, next) {
    Post.find( function(err, posts) {
        if(err) { return next(err); }
        res.json(posts);
    });
    console.log('GET request success');
});




/////////////////////////////////////////
app.listen(3000, function () {
    console.log('Server listening on', 3000);
})
