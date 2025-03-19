const admin = require("firebase-admin");
require('dotenv').config();
const serviceAccount = require(process.env.FIREBASE_ADMIN_SDK_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("✅ Firebase Initialized Successfully");

module.exports = admin; 