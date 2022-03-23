const crypto = require("crypto");
const ErrorResponse = require("../../helpers/error-response");
const { User } = require("../index");
const { Project } = require("../index");

const create = async ({ username, passwordHash, email }) => {
  const user = await User.create({ username, passwordHash, email });
  return user;
};

const findOne = async ({ username }) => {
  const user = await User.findOne({ username });
  return user;
};
const findOneWithEmail = async ({ email }) => {
  try {
    const user = await User.findOne({ email });
    if (!user || user?.length === 0)
      throw new Error("Credenciales incorrectas");
    return user;
  } catch (error) {
    console.log("The error is here", email);
    throw error;
  }
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
  const project = await Project.create({
    name: receivedProject.name,
    users: [{ username: receivedUser.username, role: "Admin" }],
  });
  const update = await User.updateOne(
    { username: receivedUser.username },
    {
      $push: {
        projects: { projectName: project.name, projectId: project._id },
      },
    },
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

async function setResetToken(receivedUser) {
  const user = receivedUser; // So it doesn't reassign the parameter value.
  const resetToken = crypto.randomBytes(20).toString("hex");
  user.resetTokenHash = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  await user.save({ validateModifiedOnly: true });
  return resetToken;
}

async function unsetResetToken(receivedUser) {
  const user = receivedUser; // So it doesn't reassign the parameter value.
  user.resetTokenHash = undefined;
  user.resetPasswordExpire = undefined;
  await user.save({ validateModifiedOnly: true });
}

async function findOneWithResetToken(resetTokenHash) {
  const user = await User.findOne({
    resetTokenHash,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user || user?.length === 0)
    throw new ErrorResponse("Invalid Token", 400);
  return user;
}

async function updatePassword(receivedUser, passwordHash) {
  const user = receivedUser;
  user.passwordHash = passwordHash;
  await user.save({ validateModifiedOnly: true });
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
  setResetToken,
  unsetResetToken,
  findOneWithEmail,
  findOneWithResetToken,
  updatePassword,
};
