async function cleanAndLog(model) {
  const result = await model.deleteMany({});
  const found = await model.find({});
  console.log(found);
  console.log(result);
}

module.exports = { cleanAndLog };
