const { Bug } = require("./index");

async function find() {
  try {
    const customers = await Bug.find({});
    return customers;
  } catch (err) {
    return err;
  }
}

async function create(bug) {
  try {
    const newBug = new Bug(bug);
    newBug.save();
    return newBug;
  } catch (err) {
    return err;
  }
}

async function deleteOne(id) {
  try {
    const deleted = await Bug.deleteOne({ _id: id }, {});
  } catch (err) {
    return err;
  }
}

async function editOne(newBug, id) {
  try {
    const bug = await Bug.replaceOne({ _id: id }, newBug);
    console.log("On database", bug);
    return bug;
  } catch (err) {
    return err;
  }
}

module.exports = {
  find,
  create,
  deleteOne,
  editOne
};
