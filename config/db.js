var mongoose = require('mongoose')
var url = process.env.process.env.MONGODB_URI || 'mongodb://localhost/blogs'

mongoose.connect(url,
    function() {
        console.log('mongodb connected');
    }
)
module.exports = mongoose;