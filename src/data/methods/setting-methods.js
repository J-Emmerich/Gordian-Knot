const { User } = require("../index");

const create = async ({ username, passwordHash }) => {
  try {
    const user = await User.create({ username, passwordHash });
    return user;
  } catch (err) {
    return err.message;
  }
};

const findOne = async ({ username }) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (err) {
    return err.message;
  }
};

const findOneAndUpdate = async (googleToken) => {
  try {
    const user = await User.findOneAndUpdate(
      { username: googleToken.name },
      { username: googleToken.name },
      { upsert: true, new: true }
    );
    return user;
  } catch (err) {
    return err.message;
  }
};
const findProjects = async ({ username }) => {
  try {
    const user = await User.findOne({ username });
    return user.projects;
  } catch (err) {
    return err.message;
  }
};
async function addProject(receivedProject, receivedUser) {
  try {
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
  } catch (err) {
    return err;
  }
}

async function editProject(newProject, id) {
  try {
    const project = await User.replaceOne({ _id: id }, newProject);
    return project;
  } catch (err) {
    return err;
  }
}

async function editUserCurrentProject(currentProject, user) {
  try {
    const editedUser = await User.findOneAndUpdate(
      { username: user.username },
      { currentProject },
      { new: true }
    );
    return editedUser;
  } catch (err) {
    return err;
  }
}

// async function deleteProject(id) {
//   try {
//     // const deleted = await User.deleteOne({ _id: id }, {});
//     console.log("hey! This function does nothing :D");
//   } catch (err) {
//     return err;
//   }
// }

module.exports = {
  create,
  findOne,
  findOneAndUpdate,
  addProject,
  editProject,
  findProjects,
  editUserCurrentProject,
};
