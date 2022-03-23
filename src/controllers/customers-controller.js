const {
  getCustomers,
  createCustomer,
  deleteCustomer,
  editCustomer,
} = require("../use-cases/customers-use-cases");

module.exports = (methods) => {
  async function fetchCustomers(req, res, next) {
    try {
      const { user } = req;
      const customers = await getCustomers(methods, user);
      res.status(200).json({ success: true, data: customers });
    } catch (err) {
      next(err);
    }
  }

  async function saveCustomer(req, res, next) {
    try {
      const customer = req.body;
      const { user } = req;
      customer.projectId = user.currentProject;
      const newCustomer = await createCustomer(methods, customer, user);
      res.status(201).json({ success: true, data: newCustomer });
    } catch (err) {
      next(err);
    }
  }
  async function deleteOne(req, res, next) {
    try {
      const { user } = req;
      const { id } = req.params;
      await deleteCustomer(methods, id, user);
      res.status(200).json({ success: true, data: "User deleted" });
    } catch (err) {
      next(err);
    }
  }

  async function editOne(req, res, next) {
    try {
      const { user } = req;
      const { id } = req.params;
      const newCustomer = req.body;
      const editedCustomer = await editCustomer(methods, newCustomer, id, user);
      res.status(200).json({ success: true, data: editedCustomer });
    } catch (err) {
      next(err);
    }
  }

  return {
    fetchCustomers,
    saveCustomer,
    deleteOne,
    editOne,
  };
};
