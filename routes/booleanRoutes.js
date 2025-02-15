const express = require("express");
const {
  saveBooleanData,
  deleteBooleanData,
  getAllBooleanData,
} = require("../controllers/booleanController");
const router = express.Router();

// Route for saving boolean data
router.post("/boolean", saveBooleanData);

// Route for deleting any boolean data with true value if false is sent
router.post("/deleteBoolean", deleteBooleanData);

// Route for getting all boolean data
router.get("/allBooleanData", getAllBooleanData);

module.exports = router;
