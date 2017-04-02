const Post = require('../../models/posts');

var createPost = function(req, res) {
  let post = new Post(req.body);
  post.save((err, post) => {
      if (err) { res.send(500, err); }
      res.json(200, post);
  });
};
