const express = require("express");
const router = express.Router();

const {
  getIndex,
  newsletterSignup,
} = require("../controllers/defaultControllers");

router.get("/", getIndex);
router.post("/newsletterSignup", newsletterSignup);

module.exports = router;
