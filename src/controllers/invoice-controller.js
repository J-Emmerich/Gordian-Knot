const {
  fetchInvoices,
  fetchInvoice,
  saveInvoice,
  editInvoice,
  deleteInvoice
} = require("./invoice-use-cases");

const saveToPdf = require("../helpers/save-to-pdf");
const path = require("path");
const root = path.join(__dirname, "../../output");

module.exports = (methods) => {
  async function fetchOne(req, res) {
    try {
      const id = req.params.id;
      console.log("id", id);
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
      console.log(invoices);
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
      console.log("id", id);
      const newInvoice = req.body;

      const editedInvoice = await editInvoice(methods, newInvoice, id);
      res.status(200).json(editedInvoice);
    } catch (err) {
      res.send(err.message);
    }
  }

  async function deleteOne(req, res) {
    try {
      const { id } = req.params;
      const deleted = await deleteInvoice(methods, id);
      res.status(200).send("deleted");
    } catch (err) {
      res.send(err.message);
    }
  }

  async function fetchPdf(req, res) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const invoice = await fetchInvoice(methods, id);
      await saveToPdf(id, invoice.invoiceNumber); // File System
      res.download(`${root}/${invoice.invoiceNumber}.pdf`);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }
  return { fetchAll, fetchOne, saveOne, editOne, deleteOne, fetchPdf };
};
