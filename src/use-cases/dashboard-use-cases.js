async function getProject(methods, user) {
  try {
    const project = await methods.findOne(user.currentProject);
    return project;
  } catch (err) {
    console.log("Error at usecases, getProject:: ");
  }
}

async function createOrUpdate(methods, project) {
  try {
    const updatedProject = await methods.findOneAndUpdate(project);
    return updatedProject;
  } catch (err) {
    return `error in use cases: ${err}`;
  }
}

module.exports = { getProject, createOrUpdate };
