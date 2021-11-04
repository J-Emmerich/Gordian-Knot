async function fetchInvoices(methods) {
  try {
    const invoices = await methods.find({});
    // console.log("at fetch all", invoices, "this was found");
    return invoices;
  } catch (err) {
    return err;
  }
}

async function fetchInvoice(methods, id) {
  try {
    const invoice = await methods.findOne(id);
    // console.log("at fetch Invoice", invoice, "this was found");
    return invoice;
  } catch (err) {
    return err;
  }
}
async function saveInvoice(methods, receivedInvoice) {
  try {
    const invoice = await methods.create(receivedInvoice);
    // console.log("at saveInvoice", invoice, "this was found");
    return invoice;
  } catch (err) {
    return err;
  }
}

async function editInvoice(methods, newInvoice, id) {
  try {
    const invoice = await methods.editOne(newInvoice, id);
    console.log("at EDIT INVOICE");
    return invoice;
  } catch (err) {
    return err;
  }
}

module.exports = {
  fetchInvoices,
  fetchInvoice,
  saveInvoice,
  editInvoice
};
