// import { render, screen } from "@testing-library/react";
// import App from "./App";

import puppeteer from "puppeteer";

test("renders learn react link puppeteer", async () => {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  const html = await page.$eval(".App-link", (e) => e.innerHTML);
  expect(html).toBe("Learn React");

  browser.close();
});

/*

// jest only
test("renders learn react link", async() => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/
