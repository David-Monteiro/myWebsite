var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var User = require('../../models/user');
var config = require('../../config/config');

router.route('/api/users')
    
    .all(function (req, res, next){
        console.log(' user api call');
        next();
    })

    .get(function (req, res, next) {
        if(!req.headers['x-auth']) {
            return res.status(401);
        }
        var token = req.headers['x-auth'];
        var auth = jwt.decode(token, config.secret);
        User.findOne({username: auth.username}, function(err, user) {
            if(err) { return next(err) }
            res.status(201).json(user);
        })
    })

    .post(function (req, res, next) {
        var user = new User({username: req.body.username});
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if(err) { return next(err) }
            user.password = hash;
            user.save(function(err) {
                if(err) { return next(err) }
                res.status(201).json({ message: 'Creation successful' });
            });
        });
});

module.exports = router;
