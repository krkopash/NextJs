import axios from "axios";
import * as cheerio from "cheerio";

export async function analyzeWebsite(url: string) {
  const start = Date.now();
  const response = await axios.get(url);
  const loadTime = Date.now() - start;
  
  const html = response.data;

  const pageSize = Buffer.byteLength(html);
  const data = cheerio.load(html);
  const images = data("img").length;
  const scripts = data("script").length;

  return { loadTime,pageSize, images, scripts,};
} 