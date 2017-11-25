const User = require('../models/user');

exports.getAllUsers = function(req, res, next) {
    User.find({}, function(err, users) {
        res.status(201).json(users)
    });
}

exports.userCreateGet = function(req, res, next) {
    res.send('Not implemented: User signup form');
}

exports.userCreatePost = function(req, res, next) {
    var newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err, newUser) {
        res.status(200).json(newUser);
    });
}