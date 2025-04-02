const express = require('express');
const router = express.Router()
const generalController = require('../controllers/generalController.js')


router.get('/', generalController.index)

router.get('/:id', generalController.show)

router.post('/', generalController.store)

router.put('/:id', generalController.update)

router.patch('/:id', generalController.modify)

router.delete('/:id', generalController.destroy)

module.exports = router;