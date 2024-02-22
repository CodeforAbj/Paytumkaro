const express = require("express");
const cors = require("cors");
const port = 9000;
const router = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/app/v1", router);

app.listen(port, () => {
  console.log(`Back End is on !! Lets Go !! Listening to ${port}`);
});
