const { User } = require("../index");

const create = async ({ username, passwordHash }) => {
  const user = await User.create({ username, passwordHash });
  return user;
};

const findOne = async ({ username }) => {
  const user = await User.findOne({ username });
  return user;
};
const findOneWithPassword = async ({ username }) => {
  const user = await User.findOne({ username }).select("+passwordHash");
  return user;
};
const findOneAndUpdate = async (googleToken) => {
  const user = await User.findOneAndUpdate(
    { username: googleToken.name },
    { username: googleToken.name },
    { upsert: true, new: true }
  );
  return user;
};
const findProjects = async ({ username }) => {
  const user = await User.findOne({ username });
  return user.projects;
};
async function addProject(receivedProject, receivedUser) {
  const update = await User.updateOne(
    { username: receivedUser.username },
    { $push: { projects: receivedProject } },
    { upsert: true, rawResult: true }
  );
  if (update.matchedCount !== 1) {
    throw Error("No user");
  }
  const user = await User.findOne({ username: receivedUser.username });
  return user;
}

async function editProject(newProject, id) {
  const project = await User.replaceOne({ _id: id }, newProject);
  return project;
}

async function editUserCurrentProject(currentProject, user) {
  const editedUser = await User.findOneAndUpdate(
    { username: user.username },
    { currentProject },
    { new: true }
  );
  return editedUser;
}

module.exports = {
  create,
  findOne,
  findOneAndUpdate,
  addProject,
  editProject,
  findProjects,
  editUserCurrentProject,
  findOneWithPassword,
};
