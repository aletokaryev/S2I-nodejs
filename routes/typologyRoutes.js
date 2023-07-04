const express = require('express')
const router = express.Router();
const typologyController = require('../controllers/typologyController')


router.get('/typologies', typologyController.getTypology)
router.post('/typologies', typologyController.addTypology)
router.delete('/typologies/:id', typologyController.deleteTypology)
router.put('/typologies/:id', typologyController.updateTypology)



module.exports = router