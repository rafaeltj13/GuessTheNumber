const express = require('express');
const router = express.Router();

const scoreRouter = require('./app/routes/score.router');

router.use('/scores', scoreRouter);

module.exports = router;