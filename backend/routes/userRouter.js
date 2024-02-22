const express = require("express");
const { alreadyExists } = require("../Middlewares/userchecks");
const User = require("../db");
const userRouter = express.Router();
const zodSignUpVerify = require("../Middlewares/zodSignUpVerify");
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
module.exports = userRouter;
