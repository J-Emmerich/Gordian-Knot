const {
  getBugs,
  createBug,
  deleteBug,
  editBug
} = require("./bug-tracker-use-cases");

module.exports = (methods) => {
  async function fetchBugs(req, res) {
    try {
      const customers = await getBugs(methods);
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async function saveBug(req, res) {
    try {
      const customer = req.body;
      customer.reportedAt = Date.now();
      const newCustomer = await createBug(methods, customer);
      console.log("POST successful", newCustomer);
      res.status(200).json(newCustomer);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  async function deleteOne(req, res) {
    try {
      const { id } = req.params;
      const deleted = await deleteBug(methods, id);
      res.status(200).send("deleted");
    } catch (err) {
      res.send(err.message);
    }
  }

  async function editOne(req, res) {
    try {
      const id = req.params.id;
      console.log("id", id);
      const newBug = req.body;

      const editedBug = await editBug(methods, newBug, id);
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