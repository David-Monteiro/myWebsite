var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../config');

router.post('/', function(req, res, next) {
    User.findOne({ username: req.body.username },
        function(err, user) {
            if (err) console.log("error");
            if(!user) { return res.send(401) }
                bcrypt.compare(req.body.password, user.password, function(err, valid) {
                    if(err || !valid) {
                        if(!user) { return res.send(401) }
                        return res.status(401).json("not a match");
                    } 
                    var token = jwt.encode({username: user.username}, secretKey);
                    return res.status(201).json(token);
            })
        })
});