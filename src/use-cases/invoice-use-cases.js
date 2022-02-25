async function fetchInvoices(methods, user) {
  const invoices = await methods.find(user.currentProject);
  return invoices;
}

async function fetchInvoice(methods, id) {
  const invoice = await methods.findOne(id);
  return invoice;
}
async function saveInvoice(methods, receivedInvoice) {
  const invoice = await methods.create(receivedInvoice);
  return invoice;
}

async function editInvoice(methods, newInvoice, id) {
  const invoice = await methods.editOne(newInvoice, id);
  return invoice;
}
async function deleteInvoice(methods, id) {
  const deleted = await methods.deleteOne(id);
  return deleted;
}
module.exports = {
  fetchInvoices,
  fetchInvoice,
  saveInvoice,
  editInvoice,
  deleteInvoice,
};
