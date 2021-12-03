const user = require("../data/models/user");

async function fetchAllProjects(methods, receivedUser) {
    try {
      const projects = await methods.findProjects({username: receivedUser.username});
      return projects;
    } catch (err) {
      return err;
    }
  }
  
//   async function fetchProject(methods, id, user) {
//     try {
//       const project = await methods.findOne(id);
//       console.log("at fetch project", project, "this was found");
//       return project;
//     } catch (err) {
//       return err;
//     }
//   }

async function findUser(methods, receivedUser) {
  try {
    const user = await methods.findOne({ username: receivedUser.username });
    return user
  } catch(err){

  }
}
  async function addProject(methods, receivedProject, user) {
    try {
      console.log("here on save");
      const updatedUser = await methods.addProject(receivedProject, user);
      console.log("here returning from save")
      return updatedUser;
    } catch (err) {
      return err;
    }
  }
  
  async function editProject(methods, newProject, id, user) {
    try {
      const project = await methods.editProject(newProject, id);
      console.log("at EDIT project");
      return project;
    } catch (err) {
      return err;
    }
  }
  async function deleteProject(methods, id, user) {
    try {
      const deleted = await methods.deleteProject(id);
      console.log("at deleteProject", deleted, "this was found");
      return deleted;
    } catch (err) {
      return err;
    }
  }
  module.exports = {
    addProject,
    editProject,
    deleteProject,
    fetchAllProjects,
    findUser
  };
  