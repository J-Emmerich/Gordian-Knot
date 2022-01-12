// Adapter methods
const { getProject, createOrUpdate } = require("./dashboard-use-cases");

module.exports = (methods) => {
  async function fetchCurrentProject(req, res) {
    const user = req.user;
    const project = await getProject(methods, user);
    console.log(project, "this was fetched")
    res.status(200).json(project);
    res.end();
  }

  async function saveProject(req, res) {
    try {
      const user = req.user;
      const project = req.body;
      project.projectId = user.currentProject
      // console.log(project)

      const newProject = await createOrUpdate(methods, project);
      // console.log(newProject, "this was saved")
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
