const { Customer } = require("../index");

async function find(projectId) {
  const customers = await Customer.find({ projectId });
  return customers;
}

async function create(customer) {
  const newCustomer = new Customer(customer);
  newCustomer.save();
  return newCustomer;
}

async function deleteOne(id) {
  await Customer.deleteOne({ _id: id }, {});
}

async function editOne(newCustomer, id) {
  const customer = await Customer.replaceOne({ _id: id }, newCustomer);
  return customer;
}

module.exports = {
  find,
  create,
  deleteOne,
  editOne,
};
