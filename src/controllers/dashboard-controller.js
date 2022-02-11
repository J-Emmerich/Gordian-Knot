// Adapter methods
const { getProject, createOrUpdate } = require("../use-cases/dashboard-use-cases");

module.exports = (methods) => {
  async function fetchCurrentProject(req, res) {
    const user = req.user;
    const project = await getProject(methods, user);
    res.status(200).json(project);
    res.end();
  }

  async function saveProject(req, res) {
    try {
      const user = req.user;
      const project = req.body;
      project.projectId = user.currentProject
      const newProject = await createOrUpdate(methods, project);
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
