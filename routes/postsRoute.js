const express = require('express');
const router = express.Router()
const postController = require('../controllers/generalController.js')


router.get('/', postController.index)

router.get('/:id', postController.index)

router.post('/', postController.index)

router.put('/:id', postController.index)

router.patch('/:id', postController.index)

router.delete('/:id', postController.index)

module.exports = router;