const Comment = require('../models/comment');
const Post = require('../models/post');

exports.getAllComments = function (req, res, next) {
    Comment.find({}).
        populate('_creator', 'username -_id').
        populate('_post', '-_comments').
        exec(function (err, comments) {
            if (err) return handleError(err);
            res.status(200).json(comments);
        })
}

exports.postCreateComment = function (req, res, next) {
    var newComment = new Comment({
        text: req.body.text,
        _creator: req.body._creator,
        _post: req.body._post
    });

    newComment.save(function (err, newComment) {
        Post.findByIdAndUpdate(req.body._post,
            {
                $push: { '_comments': newComment._id }
            });
        res.status(200).json(newComment);
    });
}