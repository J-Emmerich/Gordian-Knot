const puppeteer = require("puppeteer");
const path = require("path");

const frontEndBase = process.env.FRONTEND_PDF;

const finalPath = path.join(__dirname, "../../client/output");

const setDomainLocalStorage = async (browser, url, values) => {
  try {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (r) => {
      r.respond({
        status: 200,
        contentType: "text/plain",
        body: "body",
      });
    });
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.evaluate((values) => {
      for (const key in values) {
        // eslint-disable-next-line no-undef
        localStorage.setItem(key, values[key]);
      }
    }, values);
    await page.close();
  } catch (error) {
    console.log(error);
  }
};

const saveToPdf = async (id, name, token) => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const localStorage = { ACCESS_TOKEN: token };
    await setDomainLocalStorage(browser, frontEndBase, localStorage);

    // old
    const page = await browser.newPage();
    await page.goto(`${frontEndBase}/topdf/${id}`, {
      waitUntil: "networkidle2",
    });
    await page.emulateMediaType("screen");
    await page.pdf({
      path: `${finalPath}/${name}.pdf`,
      format: "a4",
      printBackground: true,
    });
    console.log("saved successfully");
    await browser.close();
  } catch (err) {
    console.log("*****", err.message);
  }
};

module.exports = saveToPdf;
