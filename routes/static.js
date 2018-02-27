var router = require('express').Router();
var path = require('path');

router.use(require('express').static(path.resolve(__dirname + '/../src')));

router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../src/index.html'));
});

module.exports = router;