const {
  getCustomers,
  createCustomer,
  deleteCustomer,
  editCustomer,
} = require("../use-cases/customers-use-cases");

module.exports = (methods) => {
  async function fetchCustomers(req, res) {
    const { user } = req;

    const customers = await getCustomers(methods, user);
    res.status(200).json({ success: true, data: customers });
    res.end();
  }

  async function saveCustomer(req, res) {
    try {
      const customer = req.body;
      const { user } = req;
      customer.projectId = user.currentProject;
      const newCustomer = await createCustomer(methods, customer, user);
      res.status(200).json({ success: true, data: newCustomer });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  async function deleteOne(req, res) {
    try {
      const { user } = req;
      const { id } = req.params;
      await deleteCustomer(methods, id, user);
      res.status(200).json({ success: true, data: "User deleted" });
    } catch (err) {
      res.send(err.message);
    }
  }

  async function editOne(req, res) {
    try {
      const { user } = req;
      const { id } = req.params;
      const newCustomer = req.body;
      const editedCustomer = await editCustomer(methods, newCustomer, id, user);
      res.status(200).json({ success: true, data: editedCustomer });
    } catch (err) {
      res.send(err.message);
    }
  }

  return {
    fetchCustomers,
    saveCustomer,
    deleteOne,
    editOne,
  };
};
