const mongoose = require("mongoose");
const User = require("../models/Users.model");

const getIndex = (req, res) => {
  res.send("Hello World");
};

const newsletterSignup = (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw new Error("Please provide an email address");
    }

    const newUser = new User({
      email,
      newsletter: true,
    });

    User.create(newUser)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    res.status(201).json({
      status: "Success",
      message: `Thank you for signing up with ${email}`,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getIndex,
  newsletterSignup,
};
