var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../config/config');



router.route('/api/sessions')
    
    .all( function (req, res, next){
        console.log(' session call');
        next();
    })
    
    .post( function (req, res, next) {
        User.findOne({ 
                username: req.body.username
            }).select('username')
            .select('password')
            .exec( function (err, user) {
                if (err) console.log("error");
                if(!user) return res.status(401).json("not a user 1");
                bcrypt.compare(req.body.password, user.password, function (err, valid) {
                    if(err || !valid) {
                        if(!user) return res.status(401).json("not a user 2");
                        if(valid)  console.log("true");
                        else console.log("false");
                        return res.status(401).json("not a matchhh");
                    } ;
                    var token = jwt.encode({username: user.username}, config.secret);
                    return res.status(201).json(token);
            });
        })
});

module.exports = router;