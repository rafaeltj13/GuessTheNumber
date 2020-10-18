const express = require('express')
const scoreController = require('../controllers/score.controller')
const router = express.Router()

router.route('/')
    .get(scoreController.getAll)
    .post(scoreController.add);

router.route('/:id')
    .get(scoreController.get)
    .patch(scoreController.update)
    .delete(scoreController.delete);

module.exports = router;