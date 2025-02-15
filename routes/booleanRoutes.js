const express = require("express");
const { saveBooleanData } = require("../controllers/booleanController");
const router = express.Router();

router.post("/boolean", saveBooleanData);

module.exports = router;
