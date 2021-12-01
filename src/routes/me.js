const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.use('/trash/courses', meController.trashCourses);
router.use('/stored/courses', meController.storedCourses);

module.exports = router;
