const Post = require('../models/post');
const User = require('../models/user');

exports.getAllPosts = function (req, res, next) {
    Post.find({}).
        populate('_creator', 'username -_id').
        exec(function (err, posts) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(201).json(posts);
        })
}

exports.getPost = function (req, res) {
    Post.findById(req.params.id, function(err, post){
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(post);
    });
}

exports.postCreatePost = function (req, res, next) {
    var newPost = new Post({
        text: req.body.text,
        _creator: req.body._creator
    });

    newPost.save(function (err, newPost) {
        User.findByIdAndUpdate(req.body._creator,
            {
                $push: { 'posts': newPost._id } 
            });
        res.status(200).json(newPost);
    });
}

exports.postDeletePost = function (req, res, next) {
    Post.findByIdAndRemove(req.params.id, function(err, post){
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(post);
    });
}
