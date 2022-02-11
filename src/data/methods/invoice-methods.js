const { Invoice } = require("../index");

async function find(projectId) {
  try {
    const invoices = await Invoice.find({projectId});
    return invoices;
  } catch (err) {
    return err;
  }
}

async function findOne(id) {
  try {
    const invoice = await Invoice.findOne({ _id: id });
    return invoice;
  } catch (err) {
    return err;
  }
}

async function create(invoice) {
  try {
    const newInvoice = new Invoice(invoice);
    newInvoice.save();
    return newInvoice;
  } catch (err) {
    return err;
  }
}

async function editOne(newInvoice, id) {
  try {
    const invoice = await Invoice.replaceOne({ _id: id }, newInvoice);
    return invoice;
  } catch (err) {
    return err;
  }
}

async function deleteOne(id) {
  try {
    const deleted = await Invoice.deleteOne({ _id: id }, {});
  } catch (err) {
    return err;
  }
}

module.exports = { find, create, findOne, editOne, deleteOne };
