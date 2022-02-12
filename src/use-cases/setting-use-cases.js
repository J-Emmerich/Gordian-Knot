async function fetchAllProjects(methods, receivedUser) {
  try {
    const projects = await methods.findProjects({
      username: receivedUser.username,
    });
    return projects;
  } catch (err) {
    return err;
  }
}

async function findUser(methods, receivedUser) {
  try {
    const user = await methods.findOne({ username: receivedUser.username });
    return user;
  } catch (err) {
    return err;
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

async function editProject(methods, newProject, id) {
  try {
    const project = await methods.editProject(newProject, id);
    return project;
  } catch (err) {
    return err;
  }
}
async function deleteProject(methods, id) {
  try {
    const deleted = await methods.deleteProject(id);
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
  editCurrentProject,
};
