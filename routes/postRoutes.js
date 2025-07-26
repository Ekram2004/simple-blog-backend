const express = require('express');
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require('../controllers/postControllers');
const verify = require('../middleware/authMiddleware')
const authorize = require('../middleware/authorizeMiddleware');
const router = express.Router();

router.post('/posts', verify, authorize('admin', 'editor'), createPost);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPost);
router.put("/posts", verify, authorize("admin", "editor"), updatePost);
router.delete("/posts", verify, authorize("admin", "editor"), deletePost);

module.exports = router;
