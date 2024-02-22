const User = require("../db");

async function alreadyExists(req, res, next) {
  const username = req.body.username;
  const dbRes = await User.findOne({ username: username });
  if (dbRes) {
    res.status(411).json({ message: "Email already taken / Incorrect inputs" });
  } else {
    next();
  }
}

module.exports = {
  alreadyExists,
};
