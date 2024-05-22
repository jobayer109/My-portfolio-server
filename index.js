const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`);
});
