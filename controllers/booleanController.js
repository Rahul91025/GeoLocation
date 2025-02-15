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

// POST: Delete any boolean data that is true if false is sent
exports.deleteBooleanData = async (req, res) => {
  const { data } = req.body;

  if (data === false) {
    try {
      // Delete any document where the data is true
      const deletedData = await BooleanModel.deleteOne({ data: true });

      if (!deletedData.deletedCount) {
        return res
          .status(404)
          .json({ message: "No data with value true found to delete." });
      }

      res.status(200).json({
        message: "Boolean data with value true deleted successfully!",
        deletedData,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error deleting boolean data",
        error: error.message,
      });
    }
  } else {
    res.status(400).json({ message: "Data must be false to delete." });
  }
};

// GET: Show all boolean data
exports.getAllBooleanData = async (req, res) => {
  try {
    const allData = await BooleanModel.find(); // Find all documents in the collection

    res.status(200).json({
      message: "All boolean data fetched successfully!",
      data: allData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching boolean data",
      error: error.message,
    });
  }
};
