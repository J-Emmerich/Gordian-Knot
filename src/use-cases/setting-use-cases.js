async function fetchAllProjects(methods, receivedUser) {
  const projects = await methods.findProjects({
    username: receivedUser.username,
  });
  return projects;
}

async function findUser(methods, receivedUser) {
  const user = await methods.findOne({ username: receivedUser.username });
  return user;
}
async function addProject(methods, receivedProject, user) {
  const updatedUser = await methods.addProject(receivedProject, user);
  return updatedUser;
}

async function editProject(methods, newProject, id) {
  const project = await methods.editProject(newProject, id);
  return project;
}
async function deleteProject(methods, id) {
  const deleted = await methods.deleteProject(id);
  return deleted;
}
async function editCurrentProject(methods, currentProject, user) {
  const newUser = await methods.editUserCurrentProject(currentProject, user);
  return newUser;
}
module.exports = {
  addProject,
  editProject,
  deleteProject,
  fetchAllProjects,
  findUser,
  editCurrentProject,
};
