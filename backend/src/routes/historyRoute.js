const express = require('express');
const { historyController } = require('../app/controllers');
const router = express.Router();

router.get('/', historyController.testHistoryController);

module.exports = router;
