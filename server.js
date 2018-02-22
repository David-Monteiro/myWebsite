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
/*app.get('/', function (req, res) {
  //res.send('GET request success');
  //or
  console.log('GET request success');
  res.status(500).json({ message: 'JSON GET request success' });
})*/

    /*POST method*/
/*app.post('/', function (req, res) {
  //res.send('POST request success');
  //or
  console.log('POST request success');
  res.status(500).json({ message: 'JSON POST request success' });
})*/

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
        res.status(500).json(201, post);
    });
    console.log('POST request success');
});

    /*GET method*/
app.get('/api/posts', function (req, res, next) {
    Post.find( function(err, posts) {
        if(err) { console.log('GET error'); return next(err); }
         console.log('GET done1');
        res.json(posts);
        console.log('GET done2');
    });
    console.log('GET request success');
});


//////////Single//item//Requests//////////

app.get('/api/posts/:post_id', function(req, res) {
	Post.findById(req.params.post_id, function(err, post) {
		if (err) { res.send(err); }
		res.status(500).json(post);
	});
});

app.put('/api/posts/:post_id', function(req, res) {
	Post.findById(req.params.post_id, function(err, post) {
		if(err) { res.send(err); }
		post.body = req.body.body;

		post.save(function(err) {
			if(err) { res.send(err); }
			res.status(500).json({ message: 'Update successful' });
		});
	});
});

app.delete('/api/posts/:post_id', function(req, res) {
	Post.remove( { _id: req.params.post_id },
	 function(err, post) {
		if(err) { res.send(err); }
		res.status(500).json({ message: 'delete was a success' });
	});
});

///////Hosting//page//through//node///////////////////////////////
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/src/index.html');
});


/////////////////////////////////////////
app.listen(3000, function () {
    console.log('Server listening on', 3000);
})
