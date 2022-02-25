const { Invoice } = require("../index");

async function find(projectId) {
  const invoices = await Invoice.find({ projectId });
  return invoices;
}

async function findOne(id) {
  const invoice = await Invoice.findOne({ _id: id });
  return invoice;
}

async function create(invoice) {
  const newInvoice = new Invoice(invoice);
  newInvoice.save();
  return newInvoice;
}

async function editOne(newInvoice, id) {
  const invoice = await Invoice.replaceOne({ _id: id }, newInvoice);
  return invoice;
}

async function deleteOne(id) {
  await Invoice.deleteOne({ _id: id }, {});
}

module.exports = { find, create, findOne, editOne, deleteOne };
