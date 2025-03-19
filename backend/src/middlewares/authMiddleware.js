const admin = require("../config/firebase");
const User = require("../models/user");

const verifyFirebaseToken = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // Verify Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Check if user exists in PostgreSQL
    let user = await User.findByPk(decodedToken.uid);
    if (!user) {
      // Save user to PostgreSQL if not exists
      user = await User.create({
        id: decodedToken.uid,
        email: decodedToken.email,
        name: decodedToken.name || null,
        photoURL: decodedToken.picture || null,
      });
    }

    req.user = user; // Attach user to request
    next();
  } catch (error) {
    console.error("Firebase Auth Error:", error);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = verifyFirebaseToken;
