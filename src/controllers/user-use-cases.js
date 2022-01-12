async function editCurrentProject(methods, currentProject, user) {
    try {
      const newUser = await methods.editUserCurrentProject(currentProject, user);
      console.log("at EDIT project", user);
      return newUser;
    } catch (err) {
      return err;
    }
  }

  module.exports = {editCurrentProject}