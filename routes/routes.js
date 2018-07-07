const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => res.render("landing"));
routes.get("/home", (req, res) => res.render("home"));
routes.get("/about", (req, res) => res.render("about"));

module.exports = routes;
