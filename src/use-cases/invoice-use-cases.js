async function fetchInvoices(methods, user) {
  try {
    const invoices = await methods.find(user.currentProject);
    return invoices;
  } catch (err) {
    return err;
  }
}

async function fetchInvoice(methods, id) {
  try {
    const invoice = await methods.findOne(id);
    return invoice;
  } catch (err) {
    return err;
  }
}
async function saveInvoice(methods, receivedInvoice) {
  try {
    const invoice = await methods.create(receivedInvoice);
    return invoice;
  } catch (err) {
    return err;
  }
}

async function editInvoice(methods, newInvoice, id) {
  try {
    const invoice = await methods.editOne(newInvoice, id);
    return invoice;
  } catch (err) {
    return err;
  }
}
async function deleteInvoice(methods, id) {
  try {
    const deleted = await methods.deleteOne(id);
    return deleted;
  } catch (err) {
    return err;
  }
}
module.exports = {
  fetchInvoices,
  fetchInvoice,
  saveInvoice,
  editInvoice,
  deleteInvoice,
};
