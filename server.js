const express = require("express");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

// Setup Server
const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));
// Setup Handlebars
app.engine("hbs", hbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

// Routing
const routes = require("./routes/routes");
app.use("/", routes);

// Database
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("🦔 MongoDB Connected 🦔"))
  .catch(err => console.log(err));

// Start Server
app.listen(PORT, () => console.log(`🧟‍ ITS ALIIIVE ON PORT ${PORT} 🧟‍`));
