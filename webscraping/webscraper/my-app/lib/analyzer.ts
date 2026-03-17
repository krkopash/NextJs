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
  const title =data("title").text();
  const noAlt=data("img:not([alt])").length;
  const metaDescription = data('meta[name="description"]').attr("content");

  let issues: string[] = [];
  if(!title){
    issues.push("title is not available");
  }

  if(!metaDescription){
    issues.push("metadata description is not available");
  }

  if(noAlt>0){
    issues.push(`there is ${noAlt} images are without alt `);
  }
  if(scripts>10){
    issues.push(`there is ${scripts} scripts`);
  }
  if(loadTime>1000){
    issues.push("it takes more time to load");
  }

  if(pageSize>2000000){
    issues.push("page size is too large")
  }

  return  {loadTime, scripts, images, noAlt, issues, metaDescription, pageSize,title, data
  // {metrics: { loadTime,pageSize, images, scripts, noAlt,},
  //   seo: {title, metaDescription},
  //   performance: {},issues,};
}} 