const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

const PORT = 3000;

app.get("/api/websitehealth", (req, res) => {
  console.log("Health checked");
  res.json({
    service: "Job listing Backend",
    status: "Active",
    message: "Server is up",
    time: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running at  ${PORT}`);
});
