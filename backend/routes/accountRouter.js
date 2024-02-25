const express = require("express");
const { authMiddleware } = require("../Middlewares/authMiddleware");
const { Account, User } = require("../db");
const { default: mongoose } = require("mongoose");

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
  try {
    const account = await Account.findOne({
      userId: req.userId,
    });

    if (account) {
      res.json({
        balance: account.balance,
      });
    } else {
      res.json({ message: "No such User Found" });
    }
  } catch (error) {
    res.json({
      error: error,
    });
  }
});

// The main meat of project transaction endpoint

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    const amount = req.body.amount;
    const receiverIdentifier = req.body.receiverIdentifier;

    // Find the sender first, check for minimum balance and then get receiver with safety checks

    const sender = await Account.findOne({ userId: req.userId }).session(
      session
    );
    //Safety check
    if (!sender || sender.balance < amount) {
      // Gadbad hai re baba
      await session.abortTransaction();

      return res.status(404).json({
        message: "Insufficient Balance",
      });
    }

    // My code to accomodate search by username and email. Ideally userId should be in body
    const receiver = await User.findOne({
      $or: [{ username: receiverIdentifier }, { email: receiverIdentifier }],
    }).session(session);

    if (!receiver) {
      await session.abortTransaction();

      return res.status(404).json({
        message: "Receiver Not Found",
      });
    }

    // Actual Transfer
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: receiver._id },
      { $inc: { balance: amount } }
    ).session(session);

    //commit transaction
    await session.commitTransaction();
    res.status(200).json({
      message: "Ho gayo bhaiko",
    });
  } catch (error) {
    res.status(404).json({
      message: "Transaction Failed Zhik chika kachow",
    });
  }
});
module.exports = accountRouter;
