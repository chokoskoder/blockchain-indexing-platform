const express = require("express");
const { setIndexPreferences } = require("../controllers/indexController");
const verifyFirebaseToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/set-index", verifyFirebaseToken, setIndexPreferences);

module.exports = router;
