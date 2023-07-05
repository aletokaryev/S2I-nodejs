const express = require('express')
const router = express.Router();
const courseController = require('../controllers/courseController')


router.get('/courses', courseController.getCourses)
router.get('/courses/:id', courseController.getSingleCourse)
router.post('/courses', courseController.addCourse)
router.delete('/courses/:id', courseController.deleteCourse)
router.put('/courses/:id', courseController.updateCourse)



module.exports = router