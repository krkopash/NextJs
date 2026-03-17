import * as cheerio from 'cheerio';
import { NextRequest, NextResponse } from "next/server";

export default async function GET (){
  const response =  await fetch('https://books.toscrape.com');
  const html =await response.text();
  const data=cheerio.load(html);
  const h1=data('h1').text();
  const p=data('p').text();
  const img=data('li').text();
  const links = data('a').map((i, el) => data(el).attr('href')).get();

  return(
    <div>
      <h1>h1 tag:{h1}</h1><br/>
      <h1>links:{links}</h1><br/>
      <h1>p tag: {p}</h1><br/>
      <h1>Image: {img}</h1>
    </div>
  )
}