const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const auth = require("../middleware/auth.js");
const axios = require("axios");
const User = require("../models/user");

// Create a user //

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Login a user

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.lastName
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.json({ error: e.toString() }).send(e);
  }
});

// Get current user //

router.get("/users/me", async (req, res) => {
  try {
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

// Get all users

router.get("/users",auth,async (req, res) => {
  if(req.user.admin === true)
  try{
    User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.send(e);
    });
  } catch (e) {
    res.status(401).send();
  }
  
});

// Get a specific user //

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(_id)) {
    try {
      const user = await User.findById(_id);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send();
    }
  } else {
    res.status(400).send("Not a valid user id");
  }
});

// Update a User

router.patch("/users/:id", async (req, res) => {
  
  const updates = Object.keys(req.body);
  const allowedUpdates = ["firstName", "lastName", "email"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Logout a user
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send({ message: "Logged out" });
  } catch (e) {
    req.status(500).send();
  }
});

//Logout All Users
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

// Delete a User //
router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/sendemail", auth, async (req, res) => {
  const sgMail = require("@sendgrid/mail");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: `${req.user.email}`,
    from: { email: "googlenext20@netapp.com", name: "Next Tech Trivia" },
    subject: "Thanks for playing!",
    template_id: "d-be4b9250201b41c79307bdb6720a26c3",
  };
  const sendEmail = () => {
    try {
      sgMail.send(msg);
      console.log("Email has sent successfully!");
    } catch (e) {
      console.log(e);
    }
  };
  sendEmail();
});

module.exports = router;
