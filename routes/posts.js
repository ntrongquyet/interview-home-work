const express = require('express');
const router = express.Router();

var postController = require('../app/controllers/PostController');


router.post('/', postController.postPost);

router.delete('/:id', postController.deletePost);

router.put('/:id', postController.updatePost);

router.get('/:id', postController.getPostById);

router.get('/', postController.getAllPost);

module.exports = router;
