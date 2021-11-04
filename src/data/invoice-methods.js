const { Invoice } = require("./index");
console.log("This is the model::::", Invoice);

async function find() {
  try {
    const invoices = await Invoice.find({});
    return invoices;
  } catch (err) {
    return err;
  }
}

async function findOne(id) {
  try {
    const invoice = await Invoice.findById(id);
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
    console.log("On database", invoice);
    return invoice;
  } catch (err) {
    return err;
  }
}

module.exports = { find, create, findOne, editOne };
