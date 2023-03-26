import { join } from "path";
import { Invoice } from "@models";
import { IRequest } from "@commons/types";
import { NextFunction, Response } from "express";
import { saveToPdf, dayjsFormat } from "@utilities";

const root = join(__dirname, "../../client/output");

export const invoiceController = () => {
  async function fetchOne(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const invoice = await Invoice.findById(id);
      res.status(200).json({ success: true, data: invoice });
    } catch (err) {
      next(err);
    }
  }

  async function fetchAll(req: IRequest, res: Response, next: NextFunction) {
    try {
      const invoices = await Invoice.find({
        project: req.context.currentProject._id,
      });
      res.status(200).json({ success: true, data: invoices });
    } catch (err) {
      next(err);
    }
  }

  async function saveOne(req: IRequest, res: Response, next: NextFunction) {
    try {
      const invoice = req.body;
      const date = dayjsFormat(invoice.invoiceDate);
      invoice.invoiceDate = date;
      invoice.projectId = req.context.currentProject._id;
      const newInvoice = new Invoice(invoice);
      await newInvoice.save();
      res.status(201).json({ success: true, data: newInvoice });
    } catch (err) {
      next(err);
    }
  }
  async function editOne(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const newInvoice = req.body;

      const editedInvoice = await Invoice.replaceOne({ _id: id }, newInvoice);
      res.status(200).json({ success: true, data: editedInvoice });
    } catch (err) {
      next(err);
    }
  }

  async function deleteOne(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await Invoice.deleteOne({ _id: id }, {});
      res.status(200).json({ success: true, data: "deleted" });
    } catch (err) {
      next(err);
    }
  }

  async function fetchPdf(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const invoice = await Invoice.findById(id);
      await saveToPdf(id, invoice.invoiceNumber, req.context.token); // File System
      res.download(`${root}/${invoice.invoiceNumber}.pdf`);
    } catch (err) {
      next(err);
    }
  }
  return { fetchAll, fetchOne, saveOne, editOne, deleteOne, fetchPdf };
};
