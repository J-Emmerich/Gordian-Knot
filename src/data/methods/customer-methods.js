const { Customer } = require("../index");

async function find(projectId) {
  try {
    const customers = await Customer.find({ projectId });
    return customers;
  } catch (err) {
    return err;
  }
}

async function create(customer) {
  try {
    const newCustomer = new Customer(customer);
    newCustomer.save();
    return newCustomer;
  } catch (err) {
    return err;
  }
}

async function deleteOne(id) {
  try {
    const deleted = await Customer.deleteOne({ _id: id }, {});
  } catch (err) {
    return err;
  }
}

async function editOne(newCustomer, id) {
  try {
    const customer = await Customer.replaceOne({ _id: id }, newCustomer);

    return customer;
  } catch (err) {
    return err;
  }
}

module.exports = {
  find,
  create,
  deleteOne,
  editOne,
};
