// Adapter methods
const { getProject, createOrUpdate } = require("./dashboard-use-cases");

module.exports = (methods) => {
  async function fetchCurrentProject(req, res) {
    const user = req.user;
    const name = req.body.name;
    const project = await getProject(methods, "first-project", user);
    res.status(200).json(project);
    res.end();
  }

  async function saveProject(req, res) {
    try {
      const user = req.user;
      const project = req.body;
      const newProject = await createOrUpdate(methods, project, user);
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
