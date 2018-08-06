var Post = require('../../models/post');
var router = require('express').Router();

router.route('/api/posts')

	.all(function(req, res, next){
		console.log('Multiple item request');
		next();
	})

	.get(function (req, res, next) {
		Post.find().sort('-date')
		  .exec(function(err, posts){
			if(err) { console.log('GET error'); return next(err); }
			res.status(201).json(posts);
		});
		console.log('GET request success');
	})

	.post(function (req, res, next) {
		console.log(req.body);
		var post = new Post({
			username: req.body.username,
			body: req.body.postBody,
			title: req.body.title,
			tags: req.body.tags
		});
		post.save(function (err, post) {
			if(err) { return next(err) }
			res.status(201).json(post);
		});
		console.log('POST request success');
});


router.route('/api/posts/:post_id')

	.all(function(req, res, next){
		console.log('Single item request');
		next();
	})

	.get(function(req, res) {
		Post.findById(req.params.post_id, function(err, post) {
			if (err) { res.send(err); }
			res.status(201).json(post);
		});
	})

	.put(function(req, res) {
		Post.findById(req.params.post_id, function(err, post) {
			if(err) { res.send(err); }
			post.body = req.body.body;
			post.title = req.body.title;
			post.tags = req.body.tags;


			post.save(function(err) {
				if(err) { res.send(err); }
				res.status(201).json({ message: 'Update successful' });
			});
		});
	})

	.delete(function(req, res) {
		Post.remove( { _id: req.params.post_id }, function(err, post) {
			if(err) { res.send(err); }
			res.status(201).json({ message: 'delete was a success' });
		});
});

module.exports = router;