const puppeteer = require("puppeteer");
const path = require("path");

const finalPath = path.join(__dirname, "../../output");
const saveToPdf = async (id, name) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/pdf/${id}`, {
      waitUntil: "networkidle2"
    });
    await page.emulateMediaType("screen");
    await page.pdf({
      path: `${finalPath}/${name}.pdf`,
      format: "a4",
      printBackground: true
    });
    console.log("saved successfully");
    await browser.close();
  } catch (err) {
    console.log("*****", err.message);
  }
};

module.exports = saveToPdf;
