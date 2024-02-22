const z = require("zod");
const { loginSchema } = require("../zodSchemas");
function zodLoginVerify(req, res, next) {
  const userPayload = {
    loginIdentifier: req.body.loginIdentifier,
    password: req.body.password,
  };

  const userZodCheck = loginSchema.safeParse(userPayload);
  if (userZodCheck) {
    next();
  } else {
    res.status(400).json({
      message: "Zod Login fail xD",
      error: userZodCheck.error.errors,
    });
  }
}
module.exports = zodLoginVerify;
