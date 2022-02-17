const crypto = require("crypto");
const { User } = require("../index");

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
    return user;
  } catch (error) {
    console.log("The error is here", email, user)
    throw error
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

async function setResetToken(user) {

  const resetToken = crypto.randomBytes(20).toString("hex");
  user.resetPasswordToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex")

user.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
await user.save({validateModifiedOnly : true});
return resetToken;

}

async function unsetResetToken(user) {
  user.resetPasswordToken = undefined;
user.resetPasswordExpire = undefined;
await user.save({validateModifiedOnly : true});
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
};
