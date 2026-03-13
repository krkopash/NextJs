"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RootLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {e.preventDefault();
    setError("");

    if (email==="krk.opash@gmail.com" && password==="123456") {
      router.push("/dashboard/user"); 
    } else {
      setError("invalid password or mail please check again");
    }
  };

  return (
    <div className="flex justify-center">
      <div><br/><br/><br/>
        <h1 className="text-3xl font-black mb-2 text-center text-blue-600">Login</h1><br/>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block font-black text-gray-700 uppercase mb-1">Email</label>
            <input  type="email"  value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block border-2 p-3"  placeholder="ENTER EMAIL" required/>
          </div>
          <div>
            <label className="block font-black text-gray-700 uppercase mb-1">Password</label>
            <input  type="password"  value={password}
              onChange={(e) => setPassword(e.target.value)} className="mt-1 block border-2 p-3"   placeholder="••••••" required/>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-3 font-bold"> {error}</div>
          )}
          <button  type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-black hover:bg-blue-700 active:scale-95 transition-all uppercase tracking-widest">
            login
          </button>
        </form>
        
      </div>
    </div>
  );
}