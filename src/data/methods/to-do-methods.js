const { ToDo } = require("../index");

async function findOne(projectId) {
  try {
    const project = await ToDo.find({ projectId });
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
  initialData,
  projectId
}) {
  try {
    const project = await ToDo.findOneAndUpdate(
      { name },
      { tasks, cards, cardOrder, initialData, projectId },
      { upsert: true, new: true }
    );
    return project;
  } catch (err) {
    return `error in db: ${err}`;
  }
}
module.exports = { findOne, findOneAndUpdate };
