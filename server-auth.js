var express = require('express');
var jwt = require('jwt-simple');
var _ = require('lodash');
var app = express();
var bcrypt = require('bcrypt');

app.use(require('body-parser').json());

var users = [{username: 'david', password: '124'}];
var secretKey = 'supersecretkey';

function findUserByUsername(userName) {
    return _.find(users, {username: userName});
}
function validateUser(user, password, callback) {
	console.log(user.password == password);
	bcrypt.hash(user.password, 10, function(err, hash) {
	  bcrypt.compare(password, hash, callback);
	});
	    
}

app.post('/session', function(req, res) {
	 
    var user = findUserByUsername(req.body.username);


    validateUser(user, req.body.password, function(err, valid) {
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
});

app.get('/user', function(req, res){
    var token = req.headers['x-auth'];
    var user = jwt.decode(token, secretKey);
    console.log("get");
    res.status(201).json(user);
});

app.listen(3000);