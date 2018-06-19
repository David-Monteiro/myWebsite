var express = require('express');
var jwt = require('jwt-simple');
var _ = require('lodash');
var app = express();
var bcrypt = require('bcrypt');
var User = require('./models/user');

app.use(require('body-parser').json());


var secretKey = 'supersecretkey';




app.post('/session', function(req, res) {
	 

    console.log(req.body.username);
    User.findOne(
    	{	
    		username: req.body.username
    	},
    	function (err, user) {

    		if (err) console.log("error");
    		if (!user) console.log("not a valid user");
    	 	console.log(user);
	    	bcrypt.compare(req.body.password, user.password, function(err, valid) {
			    console.log(err);
				console.log(valid);
				if(err || !valid) {
					console.log("error or incorrect pass");
					return res.status(401).json("not a match");
				} 
				console.log("correct pass");
				var token = jwt.encode({username: user.username}, secretKey);
				return res.status(201).json(token);
			});
    	}
	);


});


app.get('/user', function(req, res){
    var token = req.headers['x-auth'];
    var auth = jwt.decode(token, secretKey);
    console.log("get");
    User.findOne({username: auth.username}, 
    	function(err, user){
    		res.json(user)
    });
});

app.post('/user', function(req,res,next) {
	var user = new User({username: req.body.username});
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		user.password = hash;
		user.save(function (err, user) {
			if(err) { throw next(err) 
				console.log("error");
			}
			console.log("new user created");
			res.status(201).json({ message: 'Creation successful' });;

		});
	});
	
});

app.listen(3000);