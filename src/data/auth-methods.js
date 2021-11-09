const { User } = require("./index");

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

module.exports = {
  create,
  findOne,
  findOneAndUpdate
};
