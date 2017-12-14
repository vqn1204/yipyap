const User = require('../models/user');

exports.getAllUsers = function(req, res, next) {
    User.find({}, function(err, users) {
        res.status(201).json(users)
    });
}


exports.userCreatePost = function(req, res, next) {
    var newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        _post: req.body._post
    });

    newUser.save(function(err, newUser) {
        res.status(200).json(newUser);
    });
}