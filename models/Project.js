const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  deploy: {
    type: String,
    default: ""
  },
  createdat: {
    type: Date,
    required: true
  }
});

const Project = mongoose.model("projects", ProjectSchema);

module.exports = Project;
