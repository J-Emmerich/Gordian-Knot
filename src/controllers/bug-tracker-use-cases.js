async function getBugs(methods) {
  try {
    const customers = await methods.find();
    // console.log(customers, "this is use cases customer");
    return customers;
  } catch (err) {
    console.log("Error at usecases, getCustomer:: ");
  }
}

async function createBug(methods, customer) {
  try {
    const updatedProject = await methods.create(customer);
    return updatedProject;
  } catch (err) {
    return `error in use cases: ${err}`;
  }
}

async function deleteBug(methods, id) {
  try {
    const deleted = await methods.deleteOne(id);
    console.log("at deleteCustomer", deleted, "this was found");
    return deleted;
  } catch (err) {
    return err;
  }
}

async function editBug(methods, newInvoice, id) {
  try {
    const invoice = await methods.editOne(newInvoice, id);
    console.log("at editCustomer");
    return invoice;
  } catch (err) {
    return err;
  }
}

module.exports = { getBugs, createBug, deleteBug, editBug };
