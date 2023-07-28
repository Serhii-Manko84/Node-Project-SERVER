const express = require("express");
const { Project } = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error("Error  project data", error);
    res.status(500).json({ error: "Error  project data" });
  }
});

router.post("/demo", async (req, res) => {
  let project = new Project({
    customer: req.body.customer,
    projectNumber: req.body.projectNumber,
  });

  try {
    const doc = await project.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error("Error save project", error);
    res.status(500).json({ error: "Error save project" });
  }
});

module.exports = router;
