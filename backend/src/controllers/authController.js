const User = require("../models/User");

const googleAuth = async (req, res) => {
  const { email, googleId } = req.body;

  try {
    let user = await User.findOne({ where: { googleId } });

    if (!user) {
      user = await User.create({ email, googleId });
    }

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { googleAuth };
