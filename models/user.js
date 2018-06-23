var db = require('../config/db')
var schema = db.Schema;

var userSchema = new schema ({
    username: { type: String, require: true },
    password: { type: String, require: true, select: false}
});

var User = db.model('User', userSchema);

module.exports = User;