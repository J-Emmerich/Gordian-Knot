const { ToDo } = require("./index");

async function findOne(name) {
  try {
    const project = await ToDo.findOne({ name });
    return project;
  } catch (err) {
    throw new Error(err.message);
  }
}
async function findOneAndUpdate({
  name,
  tasks,
  cards,
  cardOrder,
  initialData
}) {
  try {
    const project = await ToDo.findOneAndUpdate(
      { name },
      { tasks, cards, cardOrder, initialData },
      { upsert: true, new: true }
    );
    return project;
  } catch (err) {
    return `error in db: ${err}`;
  }
}
module.exports = { findOne, findOneAndUpdate };
