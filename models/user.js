var db = require('../config/db')

var user = mongoose.Schema({
    username: { type: String, require: true },
    password: { type: Stringm require: true, select: false}
});

module.exports = mongoose.model('User', user);