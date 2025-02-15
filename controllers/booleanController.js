const BooleanModel = require("../models/booleanModel");

// POST: Save boolean data
exports.saveBooleanData = async (req, res) => {
  const { data } = req.body;

  try {
    const newBooleanData = new BooleanModel({
      data,
    });

    await newBooleanData.save();
    res.status(201).json({
      message: "Boolean data saved successfully!",
      data: newBooleanData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving boolean data",
      error: error.message,
    });
  }
};
