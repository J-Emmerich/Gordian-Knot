const {
  fetchInvoices,
  fetchInvoice,
  saveInvoice,
  editInvoice
} = require("./invoice-use-cases");

module.exports = (methods) => {
  async function fetchOne(req, res) {
    try {
      console.log("::::::::::::::::::::here::::::::::::");
      const id = req.params.id;
      let invoice = await fetchInvoice(methods, id);
      res.status(200).json(invoice);
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  }

  async function fetchAll(req, res) {
    try {
      const invoices = await fetchInvoices(methods);
      res.status(200).json(invoices);
    } catch (error) {
      res.send(error.message);
    }
  }

  async function saveToPdf(req, res) {
    try {
      const newInvoice = req.body;
      console.log(req.body);
      const invoice = await saveInvoice(methods, newInvoice);
      // await saveToPdf(invoice._id, invoice.invoiceNumber); // File System
      res.status(204).json(invoice);
    } catch (err) {
      res.send(err.message);
    }
  }
  async function editOne(req, res) {
    try {
      const id = req.params.id;
      const newInvoice = req.body;
      console.log("At controller", id, newInvoice.articles);
      const editedInvoice = await editInvoice(methods, newInvoice, id);
      res.status(200).json(editedInvoice);
    } catch (err) {
      res.send(err.message);
    }
  }
  return { fetchAll, fetchOne, saveToPdf, editOne };
};
