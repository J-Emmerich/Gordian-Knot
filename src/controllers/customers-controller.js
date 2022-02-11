const {
  getCustomers,
  createCustomer,
  deleteCustomer,
  editCustomer
} = require("../use-cases/customers-use-cases");

module.exports = (methods) => {
  async function fetchCustomers(req, res) {
    const user = req.user;

    const customers = await getCustomers(methods, user);
    res.status(200).json(customers);
    res.end();
  }

  async function saveCustomer(req, res) {
    try {
      const customer = req.body;
      const user = req.user;
      customer.projectId = user.currentProject;
      const newCustomer = await createCustomer(methods, customer, user);
      res.status(200).json(newCustomer);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  async function deleteOne(req, res) {
    try {
      const user = req.user;
      const { id } = req.params;
      const deleted = await deleteCustomer(methods, id, user);
      res.status(200).send("deleted");
    } catch (err) {
      res.send(err.message);
    }
  }

  async function editOne(req, res) {
    try {
      const user = req.user;
      const id = req.params.id;
      const newCustomer = req.body;

      const editedInvoice = await editCustomer(methods, newCustomer, id, user);
      res.status(200).json(editedInvoice);
    } catch (err) {
      res.send(err.message);
    }
  }

  return {
    fetchCustomers,
    saveCustomer,
    deleteOne,
    editOne
  };
};
