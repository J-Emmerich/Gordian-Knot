async function getBugs(methods, user) {
  try {
    const customers = await methods.find(user.currentProject);
    // console.log(customers, "this is use cases customer");
    return customers;
  } catch (err) {
    console.log("Error at usecases, getCustomer:: ");
  }
}

async function createBug(methods, bug) {
  try {
    const newBug = await methods.create(bug);
    return newBug;
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
