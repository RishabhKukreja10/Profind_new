// const postSchema = require("../models/postSchema");
// const ErrorResponse = require("../utils/errorResponse");
import puppeteer from 'puppeteer'

const search = async (req, res) => {
  const link = req.headers.data
  console.log(link)

  async function startBrowser(url) {
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(url)
      const [el] = await page.$x(
        '//th[contains(text()," Item model number")]/following-sibling::td'
      )
      // const [el] = await page.$x('//*[@id="productDetails_techSpec_section_1"]/tbody/tr[5]/td');
      const txt = await el.getProperty('textContent')
      const modelNumber = await txt.jsonValue()
      console.log(modelNumber)
      res.status(200).json({ success: true, modelNumber })
    } catch (err) {
      console.log(err)
    }
    // browser.close();
  }
  startBrowser(link)
}

export default search
