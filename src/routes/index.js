const express = require('express');

const { getBookData, getBookUsageData } = require("../controllers/bigquery");
const { redirectToDoc } = require("../controllers/extra");

const router = express.Router();

router.get('/', redirectToDoc);
router.get('/bookdata', getBookData);
router.get('/bookusagedata', getBookUsageData);

module.exports = router;