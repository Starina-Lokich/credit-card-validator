const puppeteer = require('puppeteer');
const { fork } = require('child_process');

jest.setTimeout(30000);

describe('Credit Card Validator form', () => {
  let browser, page, server;

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (msg) => {
        if (msg === 'ok') resolve();
      });
    });

    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('displays validation result and card logo', async () => {
    await page.goto('http://localhost:9000');

    await page.type('#cardNumber', '4532756279624589');
    await page.click('#validateBtn');

    const resultText = await page.$eval('#result', el => el.textContent);
    const logoSrc = await page.$eval('#cardLogo', el => el.src);

    expect(resultText).toBe('Valid card number');
    expect(logoSrc).toContain('visa.png');
  });
});