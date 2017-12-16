var express = require('express');
const routes = express.Router();


// Controller imports
// userController = require('./controllers/userController');
postController = require('./controllers/postController');
commentController = require('./controllers/commentController');



// User routes
// routes.get('/allusers', userController.getAllUsers);
// routes.post('/signup', userController.userCreatePost);

// Post routes
routes.get('/allposts', postController.getAllPosts);
routes.post('/newpost', postController.postCreatePost);
routes.get('/post/:id', postController.getPost);
routes.delete('/post/:id/delete', postController.postDeletePost);

// Comment routes
routes.get('/allcomments', commentController.getAllComments);
routes.post('/newcomment', commentController.postCreateComment);


module.exports = routes;