import * as cheerio from 'cheerio';
import { NextRequest, NextResponse } from "next/server";
import Link from 'next/link';
export default async function GET (){
 return(
  <div>
    <Link href="/puppeteer">puppeteer-pdf</Link><br/>
    <Link href="/puppeteer/img">puppeteer-img</Link><br/>
    <Link href="/cheerio">cheerio</Link>
  </div>
 )
}