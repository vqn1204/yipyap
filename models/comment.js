var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text: { type: String, required: true, maxlength: 140 },
    _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    _post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    voteCount: { type: Number, default: 0}
});


module.exports = mongoose.model('Comment', commentSchema);