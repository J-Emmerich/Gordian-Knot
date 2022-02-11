const {
    fetchAllProjects,
    addProject,
    editProject,
    deleteProject,
    findUser
  } = require("../use-cases/project-use-cases");
  
  const path = require("path");
const { findUserAndUpdate } = require("../use-cases/auth-use-cases");
  const root = path.join(__dirname, "../../output");
  
  module.exports = (methods) => {

    async function fetchUser(req, res) {
        try {
            const user = req.user;
            const updatedUser = await findUser(methods, user)
            res.status(200).json(updatedUser);
        } catch(err) {
            console.log(err);
            res.status(500).end();
        }
    }

    async function fetchOne(req, res) {
      try {
        const user = req.user;
        const id = req.params.id;
        let invoice = await fetchProject(methods, id, user);
        res.status(200).json(invoice);
      } catch (err) {
        console.log(err);
        res.status(500).end();
      }
    }
  
    async function fetchAll(req, res) {
      try {
        const user = req.user;
        const projects = await fetchAllProjects(methods, user);
        res.status(200).json(projects);
      } catch (error) {
        res.send(error.message);
      }
    }
  
    async function saveOne(req, res) {
      try {
        const user = req.user;
        const newProject = req.body;
        const userUpdated = await addProject(methods, newProject, user);
        console.log(userUpdated, "im sending this")
        res.status(204).json(userUpdated);
      } catch (err) {
        res.send(err.message);
      }
    }
    async function editOne(req, res) {
      try {
        const user = req.user;
        const id = req.params.id;
        console.log("id", id);
        const newInvoice = req.body;
  
        const editedInvoice = await editProject(methods, newInvoice, id, user);
        res.status(200).json(editedInvoice);
      } catch (err) {
        res.send(err.message);
      }
    }
  
    async function deleteOne(req, res) {
      try {
        const user = req.user;
        const { id } = req.params;
        const deleted = await deleteProject(methods, id, user);
        res.status(200).send("deleted");
      } catch (err) {
        res.send(err.message);
      }
    }
  
    return { fetchUser, fetchAll, fetchOne, saveOne, editOne, deleteOne };
  };
  