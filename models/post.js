var db = require('../config/db')
var schema = db.Schema;


var tag = new schema({ 
	type: String
});

var postSchema = new schema ({
    username: { type: String, required: true },
    update: { type: Date, default: Date.now },
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: [tag]
});

var Post = db.model('Post', postSchema);

module.exports = Post;