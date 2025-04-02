const express = require('express');
const router = express.Router()
const commentsController = require('../controllers/commentsController.js')


router.get('/', commentsController.index)

router.get('/:id', commentsController.show)

router.post('/:id', commentsController.store)

router.put('/:id', commentsController.update)

router.patch('/:id', commentsController.modify)

router.delete('/:id', commentsController.destroy)

module.exports = router;