var express = require('express');
var app = require('./app.js');

// var User = require('./models/user');
// var Post = require('./models/post');


app.listen(3000, () => {
  console.log('Running on port 3000...');
});

// module.exports = mongoose.model('Post', postSchema);
// module.exports = mongoose.model('User', UserSchema);