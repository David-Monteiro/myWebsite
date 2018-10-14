var mongoose = require('mongoose')
var url = process.env. + "mongodb://heroku_snm82h11:3tn8g23tli7vf86eg2k3ecnp47@ds131973.mlab.com:31973/heroku_snm82h11" || 'mongodb://localhost/blogs'

mongoose.connect('mongodb://localhost/blogs',
    function() {
        console.log('mongodb connected');
    }
)
module.exports = mongoose;