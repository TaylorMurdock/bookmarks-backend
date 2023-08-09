///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config();

const { PORT = 3000 } = process.env;
const express = require("express");
const app = express();

///////////////////////////////
// ROUTES
////////////////////////////////

// test route
app.get("/", (req, res) => {
  res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
