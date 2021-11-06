const {
  fetchInvoices,
  fetchInvoice,
  saveInvoice,
  editInvoice
} = require("./invoice-use-cases");

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

  async function fetchAll(req, res) {
    try {
      const invoices = await fetchInvoices(methods);
      res.status(200).json(invoices);
    } catch (error) {
      res.send(error.message);
    }
  }

  async function saveOne(req, res) {
    try {
      const newInvoice = req.body;
      console.log(req.body);

      const invoice = await saveInvoice(methods, newInvoice);
      res.status(204).json(invoice);
    } catch (err) {
      res.send(err.message);
    }
  }
  async function editOne(req, res) {
    try {
      const id = req.params.id;
      const newInvoice = req.body;

      const editedInvoice = await editInvoice(methods, newInvoice, id);
      res.status(200).json(editedInvoice);
    } catch (err) {
      res.send(err.message);
    }
  }

  async function fetchPdf(req, res) {
    try {
      const pdfId = req.params.id;
      console.log(pdfId);
      // await saveToPdf(invoice._id, invoice.invoiceNumber); // File System
      res.status(200).send("lets say it's good");
    } catch (err) {
      res.send(err.message);
    }
  }
  return { fetchAll, fetchOne, saveOne, editOne, fetchPdf };
};
