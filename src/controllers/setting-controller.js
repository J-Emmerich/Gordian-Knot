const {
    fetchAllProjects,
    addProject,
    editProject,
    deleteProject,
    findUser,
    editCurrentProject
  } = require("../use-cases/setting-use-cases");
  
  const path = require("path");
  const root = path.join(__dirname, "../../output");
  
  module.exports = (methods) => {

    async function fetchUser(req, res) {
        try {
            const user = req.user;
            const updatedUser = await findUser(methods, user)
            res.status(200).json({success: true, data: updatedUser});
        } catch(err) {
            res.status(500).end();
        }
    }

    async function fetchOne(req, res) {
      try {
        const user = req.user;
        const id = req.params.id;
        let project = await fetchProject(methods, id, user);
        res.status(200).json({success: true, data: project});
      } catch (err) {
        res.status(500).end();
      }
    }
  
    async function fetchAll(req, res) {
      try {
        const user = req.user;
        const projects = await fetchAllProjects(methods, user);
        res.status(200).json({success: true, data: projects});
      } catch (error) {
        res.send(error.message);
      }
    }
  
    async function saveOne(req, res) {
      try {
        const user = req.user;
        const newProject = req.body;
        const userUpdated = await addProject(methods, newProject, user);
        res.status(204).json({success: true, data: userUpdated});
      } catch (err) {
        res.send(err.message);
      }
    }
    async function editOne(req, res) {
      try {
        const user = req.user;
        const id = req.params.id;
        const newProject = req.body;
        const editedProject = await editProject(methods, newProject, id, user);
        res.status(200).json({success: true, data: editedProject});
      } catch (err) {
        res.send(err.message);
      }
    }

    async function editCurrentOne(req, res) {
      try {
        const user = req.user;
        const currentProject = req.body;
        const editedCurrentProject = await editCurrentProject(methods, currentProject._id, user);
        res.status(200).json({success: true, data: editedCurrentProject});
      } catch (err) {
        res.send(err.message);
      }
    }

    async function deleteOne(req, res) {
      try {
        const user = req.user;
        const { id } = req.params;
      await deleteProject(methods, id, user);
        res.status(200).json({success: true, data: "deleted"});
      } catch (err) {
        res.send(err.message);
      }
    }
  
    return { fetchUser, fetchAll, fetchOne, saveOne, editOne, editCurrentOne, deleteOne };
  };
  