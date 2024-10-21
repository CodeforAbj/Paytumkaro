const { User } = require("../db");

async function alreadyExists(req, res, next) {
  try {
    const username = req.body.username;
    const dbRes = await User.findOne({ username: username });
    if (dbRes) {
      res
        .status(411)
        .json({ message: "Email already taken / Incorrect inputs" });
    } else {
      next();
    }
  } catch (error) {
    console.log("Error in Already Exists");
    res.status(404).json({
      message: "error at already exists",
      error: error,
    });
  }
}

module.exports = {
  alreadyExists,
};
