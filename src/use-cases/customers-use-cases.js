async function getCustomers(methods, user) {
  try {
    const customers = await methods.find(user.currentProject);
    return customers;
  } catch (err) {
    console.log("Error at usecases, getCustomer:: ");
  }
}

async function createCustomer(methods, customer) {
  try {
    const updatedProject = await methods.create(customer);
    return updatedProject;
  } catch (err) {
    return `error in use cases: ${err}`;
  }
}

async function deleteCustomer(methods, id) {
  try {
    const deleted = await methods.deleteOne(id);
    console.log("at deleteCustomer", deleted, "this was found");
    return deleted;
  } catch (err) {
    return err;
  }
}

async function editCustomer(methods, newInvoice, id) {
  try {
    const invoice = await methods.editOne(newInvoice, id);
    console.log("at editCustomer");
    return invoice;
  } catch (err) {
    return err;
  }
}

module.exports = { getCustomers, createCustomer, deleteCustomer, editCustomer };
