const {
  getBugs,
  createBug,
  deleteBug,
  editBug
} = require("./bug-tracker-use-cases");

module.exports = (methods) => {
  async function fetchBugs(req, res) {
    try {
      const user = req.user;
      const customers = await getBugs(methods, user);
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async function saveBug(req, res) {
    try {
      const user = req.user;
      const bug = req.body;
      bug.projectId = user.currentProject;
      bug.reportedAt = Date.now();
      console.log(bug, "this received")
      const newBug = await createBug(methods, bug);
      console.log("POST successful", newBug);
      res.status(200).json(newBug);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  async function deleteOne(req, res) {
    try {
      const user = req.user;
      const { id } = req.params;
      const deleted = await deleteBug(methods, id, user);
      res.status(200).send("deleted");
    } catch (err) {
      res.send(err.message);
    }
  }

  async function editOne(req, res) {
    try {
      const user = req.user;
      const id = req.params.id;
      console.log("id", id);
      const newBug = req.body;

      const editedBug = await editBug(methods, newBug, id, user);
      res.status(200).json(editedBug);
    } catch (err) {
      res.send(err.message);
    }
  }

  return {
    fetchBugs,
    saveBug,
    deleteOne,
    editOne
  };
};
