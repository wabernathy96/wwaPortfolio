const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => res.render("landing"));
routes.get("/home", (req, res) => res.render("home"));
routes.get("/about", (req, res) => res.render("about"));
routes.get("/about/work-history", (req, res) => res.render("workhistory"));
routes.get("/about/off-clock", (req, res) => res.render("offclock"));

module.exports = routes;
