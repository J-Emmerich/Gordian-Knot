const { ToDo } = require("./index");
console.log("This is the model::::", ToDo);

async function findOne(name) {
  try {
    console.log(name, "this is name");
    const project = await ToDo.findOne({ name });
    console.log(project, "this is project");
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
