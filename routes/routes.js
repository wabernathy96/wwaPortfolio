const express = require("express");
const routes = express.Router();
const rp = require("request-promise");

const Project = require("../models/Project");

routes.get("/", (req, res) => res.render("landing"));
routes.get("/home", (req, res) => res.render("home"));
routes.get("/about", (req, res) => res.render("about"));
routes.get("/about/work-history", (req, res) => res.render("workhistory"));
routes.get("/about/off-clock", (req, res) => res.render("offclock"));
routes.get("/api/projects", (req, res) => {
  let options = {
    url: "https://api.github.com/users/wabernathy96/repos",
    method: "GET",
    headers: { "user-agent": "node.js" }
  };

  rp(options)
    .then(body => {
      let data = JSON.parse(body);

      for (let j = 0; j < data.length; j++) {
        const repo = new Project({
          name: data[i].name,
          description: data[i].description,
          url: data[i].html_url,
          createdat: data[i].created_at
        });
        repo.save();
        console.log("Heyo");
      }
    })
    .catch(err => res.json(err));
});

routes.get("/projects", (req, res) => {
  Project.find({})
    .sort({ createdat: -1 })
    .then(data => {
      res.render("projects", { Project: data });
    });
});

module.exports = routes;
