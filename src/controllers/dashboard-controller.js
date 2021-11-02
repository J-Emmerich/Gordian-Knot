// Adapter methods
const { getProject, createOrUpdate } = require("./dashboard-use-cases");

module.exports = (methods) => {
  async function fetchCurrentProject(req, res) {
    const name = req.body.name;
    const project = await getProject(methods, "first-project");
    console.log(project);
    res.status(200).json(project);
    res.end();
  }

  async function saveProject(req, res) {
    try {
      const project = req.body;
      const newProject = await createOrUpdate(methods, project);
      console.log("POST successful", newProject);
      res.status(200).json(newProject);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  return {
    fetchCurrentProject,
    saveProject
  };
};
