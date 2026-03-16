"use client";
import { useState } from "react";

export default function UrlForm({ onAnalyze }: any) {
  const [url, setUrl] = useState("");
  const handleSubmit = (e: any) => {e.preventDefault();
    onAnalyze(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="text" placeholder="Enter website URL" value={url} onChange={(e) => setUrl(e.target.value)}
        className="border p-2 rounded w-full"/>
      <button className="bg-black text-white px-4"> Analyze</button>
    </form>
  );
}