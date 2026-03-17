import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const browser = await puppeteer.launch({headless: true,});
  const page = await browser.newPage();
  await page.goto("https://web.dev/articles/fcp", {
    waitUntil: "networkidle2",
  });

  const pdfBuffer = await page.pdf({ format: "A4",});
  await browser.close();
  return new NextResponse(pdfBuffer, {
    headers: {"Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename.pdf",
    },
  });
}