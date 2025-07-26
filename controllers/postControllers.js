const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const post = new Post({ title, content, author: req.user.userId });
      await post.save();
      res.status(201).json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.getAllPosts = async (req, res) => {
    try {
      const post = await User.find().populate("author", "username");
      res.json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.getPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate(
        "author",
        "username"
      );
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.updatePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id);
      if (!post) return res.status(404).json({ error: "Post not found" });
      if (
        post.author.toString() !== req.user.userId &&
        req.user.role !== "admin"
      ) {
        return res
          .status(403)
          .json({ error: "Unauthorized to update this post" });
      }
      post.title = req.body.title || post.title;
      post.content = req.body.content || post.content;
      await post.save();
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) return res.status(404).json({ error: "Post not found" });
      if (
        post.author.toString() !== req.user.userId &&
        req.user.role !== "admin"
      )
        return res
          .status(403)
          .json({ error: "Unauthorized to delete this post" });
      await post.remove();
      res.json({ message: "Post deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}