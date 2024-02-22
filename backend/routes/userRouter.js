const express = require("express");
const { alreadyExists } = require("../Middlewares/userchecks");
const { User } = require("../db");
const userRouter = express.Router();
const zodSignUpVerify = require("../Middlewares/zodSignUpVerify");
const zodLoginVerify = require("../Middlewares/zodLoginVerify");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

userRouter.post("/signup", zodSignUpVerify, alreadyExists, async (req, res) => {
  try {
    const userPayload = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      upiId: req.body.upiId,
      mobNo: req.body.mobNo,
      email: req.body.email,
    };

    //Hashing
    const user = new User(userPayload);
    const passwordHash = await user.createHash(req.body.password);
    user.password_hash = passwordHash;

    const data = await user.save(); // If any error comes in save it goes in catch

    const userId = user._id;

    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );

    res.status(200).json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    console.error(" Registration Caught Error:", error);
    res.status(500).json({
      msg: "Internal Server Error in registration",
      error: error,
    });
  }
});

userRouter.post("/signin", zodLoginVerify, async (req, res) => {
  try {
    const loginIdentifier = req.body.loginIdentifier;
    const user = await User.findOne({
      $or: [
        { username: loginIdentifier },
        { email: loginIdentifier },
        // Login via OTP is different route all together, can't use mobNo here as its Number among String
      ],
    });
    if (!user) {
      //handle no user found
      res.status(404).json({
        message: "404 : User Not Found",
      });
      return; // Don't Proceed it no user found
    }

    const isPasswordValid = await user.verifyHash(req.body.password);
    if (!isPasswordValid) {
      // Handle Wrong Password
      res.status(411).json({
        message: "Wrong Password",
      });
    }
    // Otherwise Great Success
    const userId = user._id;

    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET
    );

    res.status(200).json({
      token: token,
    });
  } catch (error) {
    console.error(" Login Caught Error:", error);
    res.status(500).json({
      msg: "Internal Server Error in login",
      error: error,
    });
  }
});
module.exports = userRouter;
