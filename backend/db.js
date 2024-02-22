const mongoose = require("mongoose");
const config = require("./config");
const argon2 = require("argon2");
mongoose.connect(config.mongoURL);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password_hash: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  upiId: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  mobNo: {
    type: Number,
    required: true,
    trim: true,
    maxLength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 50,
  },
});

userSchema.methods.createHash = async function (textPassword) {
  try {
    return await argon2.hash(textPassword);
  } catch (error) {
    console.error("Error in argon create : ", error);
  }
};

userSchema.methods.verifyHash = async function (passwordInput) {
  try {
    return await argon2.verify(this.password_hash, passwordInput);
  } catch (error) {
    console.error("Error in argon verify : ", error);
  }
};
const User = mongoose.model("User", userSchema);

module.exports = { User };
