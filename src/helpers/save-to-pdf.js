const puppeteer = require("puppeteer");
const path = require("path");

const frontEndBase = "https//gordianknot.xyz";
const finalPath = path.join(__dirname, "../../client/output");
const saveToPdf = async (id, name) => {
  try {
    console.log(id, name)
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${frontEndBase}/topdf/${id}`, {
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
