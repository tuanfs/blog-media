const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/restore', coursesController.restore);
router.put('/:id/edit', coursesController.edit);
router.patch('/:id/force', coursesController.forceDelete);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.delete);
router.get('/:slug', coursesController.show);

module.exports = router;
