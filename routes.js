var express = require('express');
const routes = express.Router();

// Controller imports
userController = require('./controllers/userController');
postController = require('./controllers/postController');
commentController = require('./controllers/commentController');



routes.get('/', function(req, res, next) {
    res.send('Home Page')
})

// User routes
routes.get('/allusers', userController.getAllUsers);
routes.get('/signupform', userController.userCreateGet);
routes.post('/signup', userController.userCreatePost);

// Post routes
routes.get('/allposts', postController.getAllPosts);
routes.post('/newpost', postController.postCreatePost);

// Comment routes
routes.get('/allcomments', commentController.getAllComments);
routes.post('/newcomment', commentController.postCreateComment);


module.exports = routes;