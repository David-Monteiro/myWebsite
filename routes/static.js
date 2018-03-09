var router = require('express').Router();
var path = require('path');

router.use(require('express').static(path.resolve(__dirname + '/../public')));

router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

module.exports = router;