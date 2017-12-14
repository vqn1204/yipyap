var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    text: { type: String, required: true, maxlength: 140 },
    _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    voteCount: { type: Number, default: 0},
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});


module.exports = mongoose.model('Post', postSchema);