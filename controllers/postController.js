const Post = require('../models/post');

exports.getAllPosts = function (req, res, next) {
    Post.find({}).
        populate('_creator', 'username -_id').
        exec(function (err, posts) {
            if (err) return handleError(err);
            res.status(201).json(posts);
        })
}

exports.postCreatePost = function (req, res, next) {
    var newPost = new Post({
        text: req.body.text,
        _creator: req.body._creator
    });

    newPost.save(function (err, newPost) {
        res.status(200).json(newPost);
    });
}