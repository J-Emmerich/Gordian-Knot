async function cleanAndLog(Project) {
  const result = await Project.deleteMany({});
  const found = await Project.find({});
  console.log(found);
  console.log(result);
}

module.exports = { cleanAndLog };
