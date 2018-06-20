app.use('/api/sessions',
    require('/controller/api/sessions'));
//
//
// create a session conroller at controllers/api/sessions.js
var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../config');

router.post('/', function(req, res, next) {
    User.findOne({
        username: req.boddy.username
    }).select('password').select('username')
    .exec(function(err, user) {
        if(err) { return next(err) }
        if(!user) { return res.send(401) }
        bcrypt.compare(req.body.password, user.password, function (err, valid) {
            if(err) { return next(err) }
            if(!user) { return res.send(401) }
            var token = jwt.encode(
            {
                username: user.username, 
                config.secret
            });
            res.send(token);
        });
    });
});
