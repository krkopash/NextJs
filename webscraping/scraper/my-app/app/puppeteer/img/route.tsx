import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const browser = await puppeteer.launch({headless: true,});
  const page = await browser.newPage();
  await page.goto("https://web.dev/articles/fcp");
  

  const imgBuffer = await page.screenshot({ fullPage:true, type:"png"});
  await browser.close();
  return new NextResponse(imgBuffer, {
    headers: { "Content-Type": "image/png", "Content-Disposition": "attachment; filename.png", },
  });
}