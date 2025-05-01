const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

app.listen(5173, () => {
  console.log("server has started on 5000");
});
