var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blogs',
    function() {
        console.log('mongodb connected');
    }
)
module.exports = mongoose;