const IndexPreferences = require("../models/IndexPreferences");

const setIndexPreferences = async (req, res) => {
  const { userId, indexType, indexDetails } = req.body;

  try {
    const index = await IndexPreferences.create({ userId, indexType, indexDetails });
    return res.status(201).json(index);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { setIndexPreferences };
