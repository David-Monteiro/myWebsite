var db = require('../config/db')
var schema = db.Schema;

var postSchema = new schema ({
    username: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
var Post = db.model('Post', postSchema);

module.exports = Post;