const {
  getCustomers,
  createCustomer,
  deleteCustomer,
  editCustomer
} = require("./customers-use-cases");

console.log(getCustomers, "this should be a function");
module.exports = (methods) => {
  async function fetchCustomers(req, res) {
    const customers = await getCustomers(methods);
    res.status(200).json(customers);
    res.end();
  }

  async function saveCustomer(req, res) {
    try {
      const customer = req.body;
      console.log(customer);
      const newCustomer = await createCustomer(methods, customer);
      console.log("POST successful", newCustomer);
      res.status(200).json(newCustomer);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  async function deleteOne(req, res) {
    try {
      const { id } = req.params;
      const deleted = await deleteCustomer(methods, id);
      res.status(200).send("deleted");
    } catch (err) {
      res.send(err.message);
    }
  }

  async function editOne(req, res) {
    try {
      const id = req.params.id;
      console.log("id", id);
      const newCustomer = req.body;

      const editedInvoice = await editCustomer(methods, newCustomer, id);
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
