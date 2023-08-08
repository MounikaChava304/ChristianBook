const siteMapper = require('sitemapper');
const express = require('express');
const path = require('path');
const { sendBookDetails } = require('../controllers/siteMapController');
const router = express.Router();

router.get("/", async (req, res) => res.sendFile(path.join(__dirname, "..", '/index.html')));

router.post("/find", sendBookDetails)

module.exports = router;
