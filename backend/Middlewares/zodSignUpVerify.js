const z = require("zod");
const userSchema = require("../zodSchemas");
function zodSignUpVerify(req, res, next) {
  const userPayload = {
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    upiID: req.body.upiID,
    mobNo: req.body.mobNo,
    email: req.body.email,
  };

  const userZodCheck = userSchema.safeParse(userPayload);
  if (userZodCheck) {
    next();
  } else {
    res.status(400).json({
      message: "Zod fail xD",
      error: userZodCheck.error.errors,
    });
  }
}
module.exports = zodSignUpVerify;
