const mongoose = require("mongoose");
const formatDate = require("../../helpers/format-date");

const invoiceSchema = mongoose.Schema({
  invoiceNumber: String,
  invoiceDate: Date,
  invoiceDue: Date,
  orderNumber: String,
  articles: [
    {
      articleId: String,
      articleName: String,
      pricePerUnit: mongoose.Types.Decimal128,
      isIncludedIVA: Boolean,
      quantity: Number,
      totalPrice: mongoose.Types.Decimal128,
      vat: Number
    }
  ],
  invoiceTotal: mongoose.Types.Decimal128,
  invoiceSubTotal: mongoose.Types.Decimal128,
  invoiceTax: mongoose.Types.Decimal128,
  client: {
    clientName: String,
    clientPhone: String,
    clientEmail: String,
    address: {
      address: String,
      city: String,
      postalCode: String,
      countryCode: String
    }
  }
});

invoiceSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.articles = returnedObject.articles.map((article) => {
      article.totalPrice = article.totalPrice.toString();
      article.pricePerUnit = article.pricePerUnit.toString();
      return article;
    });
    returnedObject.invoiceTotal = returnedObject.invoiceTotal.toString();
    returnedObject.invoiceSubTotal = returnedObject.invoiceSubTotal.toString();
    returnedObject.invoiceTax = returnedObject.invoiceTax.toString();
    returnedObject.invoiceDate = formatDate(returnedObject.invoiceDate);
    returnedObject.invoiceDue = formatDate(returnedObject.invoiceDue);
  }
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
