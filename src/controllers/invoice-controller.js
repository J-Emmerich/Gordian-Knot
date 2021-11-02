const { fetchAll, fetchInvoice, saveInvoice } = require("./invoice-use-cases");

module.exports = (methods) => {
  async function fetchOne(req, res) {
    try {
      const id = req.params.id;
      let invoice = await fetchInvoice(methods, id);
      res.status(200).json(invoice);
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  }

  async function fetchInvoices(req, res) {
    try {
      const invoices = await fetchAll(methods);
      res.send(invoices);
    } catch (error) {
      res.send(error.message);
    }
  }

  async function saveToPdf(req, res) {
    try {
      const newInvoice = req.body;
      const invoice = await saveInvoice(methods, newInvoice);
      // await saveToPdf(invoice._id, invoice.invoiceNumber); // File System
      res.status(204).send(invoice);
    } catch (err) {
      res.send(err.message);
    }
  }

  return { fetchInvoices, fetchOne, saveToPdf };
};
