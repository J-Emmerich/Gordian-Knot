const { Project } = require("./index");
console.log("This is the model::::", Project);

async function findOne(name) {
  try {
    console.log(name, "this is name");
    const project = await Project.findOne({ name });
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
    const project = await Project.findOneAndUpdate(
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
