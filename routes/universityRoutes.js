const express = require('express')
const router = express.Router();
const universityController = require('../controllers/universityController')


router.get('/universities', universityController.getUniversities)
router.get('/universities/:id', universityController.getSingleUniversity)
router.post('/universities', universityController.addUniversity)
router.delete('/universities/:id', universityController.deleteUniversity)
router.put('/universities/:id', universityController.updateUniversity)



module.exports = router