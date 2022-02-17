async function getCustomers(methods, user) {
  const customers = await methods.find(user.currentProject);
  return customers;
}

async function createCustomer(methods, customer) {
  const updatedProject = await methods.create(customer);
  return updatedProject;
}

async function deleteCustomer(methods, id) {
  const deleted = await methods.deleteOne(id);
  return deleted;
}

async function editCustomer(methods, newInvoice, id) {
  const invoice = await methods.editOne(newInvoice, id);
  return invoice;
}

module.exports = { getCustomers, createCustomer, deleteCustomer, editCustomer };
