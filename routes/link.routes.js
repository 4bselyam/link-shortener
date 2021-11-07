const { Router } = require("express");
const Link = require("../models/Link");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = Router();

router.post("/generate", async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});
router.get("/", async (req, res) => {});
router.get("/:id", async (req, res) => {});

module.exports = router;
