"use client";
import { useState } from "react";
import UrlForm from "@/components/UrlForm";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  const [result, setResult] = useState(null);
  const analyze = async (url: string) => {
    const res = await fetch("/api/analyze", {
  method: "POST",
  headers: { "Content-Type": "application/json",},
  body: JSON.stringify({ url }),
});
const data = await res.json();
    setResult(data);
  };

  return (
    <main>
      <h1> website analyzer</h1>
      <UrlForm onAnalyze={analyze} />
      <ResultCard data={result} />
    </main>
  );
}