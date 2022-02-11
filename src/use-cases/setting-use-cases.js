async function fetchAllProjects(methods, receivedUser) {
    try {
      const projects = await methods.findProjects({username: receivedUser.username});
      return projects;
    } catch (err) {
      return err;
    }
  }
  
async function findUser(methods, receivedUser) {
  try {
    const user = await methods.findOne({ username: receivedUser.username });
    return user
  } catch(err){

  }
}
  async function addProject(methods, receivedProject, user) {
    try {
      const updatedUser = await methods.addProject(receivedProject, user);
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
  async function editCurrentProject(methods, currentProject, user) {
    try {
      const newUser = await methods.editUserCurrentProject(currentProject, user);
      return newUser;
    } catch (err) {
      return err;
    }
  }
  module.exports = {
    addProject,
    editProject,
    deleteProject,
    fetchAllProjects,
    findUser,
    editCurrentProject
  };
  