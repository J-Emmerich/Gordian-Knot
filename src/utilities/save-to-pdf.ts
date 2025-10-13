import * as puppeteer from 'puppeteer';
import { join } from 'path';
import { logger } from '@utilities';
import { Types } from 'mongoose';

const { BASE_FRONTEND_URL } = process.env;

const fileOutputPath = join(__dirname, '../../client/output');

const setDomainLocalStorage = async (
  browser: puppeteer.Browser,
  url: string,
  localStorageEntries: Record<string, string>,
) => {
  try {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (r) => {
      r.respond({
        status: 200,
        contentType: 'text/plain',
        body: 'body',
      });
    });
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.evaluate((entries) => {
      // entries is a plain object like { ACCESS_TOKEN: "...", USER_ID: "123" }
      for (const [key, value] of Object.entries(entries)) {
        localStorage.setItem(key, value);
      }
    }, localStorageEntries);
    await page.close();
  } catch (error) {
    logger.error(error, 'setDomainLocalStorage');
  }
};

export const saveToPdf = async (
  id: Types.ObjectId,
  invoiceNumber: string,
  contextToken: string,
): Promise<void> => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const localStorage = { ACCESS_TOKEN: contextToken };
    await setDomainLocalStorage(browser, BASE_FRONTEND_URL, localStorage);

    // old
    const page = await browser.newPage();
    await page.goto(`${BASE_FRONTEND_URL}/topdf/${id}`, {
      waitUntil: 'networkidle2',
    });
    await page.emulateMediaType('screen');
    await page.pdf({
      path: `${fileOutputPath}/${invoiceNumber}.pdf`,
      format: 'a4',
      printBackground: true,
    });

    await browser.close();
  } catch (err) {
    logger.error(err);
  }
};
