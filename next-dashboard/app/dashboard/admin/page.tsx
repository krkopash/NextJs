"use client";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

export default function AdminPage() {
  const [message, setMessage] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => { const timer = setTimeout(() => {
      setIsInitialLoading(false); }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const handleAdminAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setMessage("");
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (adminEmail === "krk.opash@gmail.com" && adminPassword === "123456") {
      setIsAuthorized(true);
    } else {
      setMessage("invalid email or password please try again");
    }
    setIsAuthenticating(false);
  };
 const [isCreatingUser, setIsCreatingUser] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreatingUser(true);
    setMessage("loading...");
    
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, imageUrl }),
      });

      if (res.ok) {
        setMessage("SUCCESS: DATA RECORDED");
        setEmail("");  setPassword("");
        setImageUrl("");
      } else {
        const error = await res.json();
        setMessage(`ERROR: ${error.error}`);
      }
    } catch (err: any) {
      setMessage(err);
    } finally {
      setIsCreatingUser(false);
    }
  };

  if (isInitialLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 font-sans min-h-[60vh]">
        <Spinner size="lg"/>
        <p className="mt-6 text-blue-600 font-black tracking-widest animate-pulse">
          ACCESSING secure User Data...
        </p>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="flex flex-col items-center justify-center p-20 font-sans">
        <div className="bg-white p-10 rounded-3xl border-4 border-blue-600 shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-black mb-6 text-center tracking-tighter">Admin login</h2>
          <form onSubmit={handleAdminAuth} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-1 tracking-widest">ADMIN EMAIL</label>
              <input  type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-3 focus:border-blue-500 outline-none disabled:bg-gray-50"  placeholder="ADMIN@MAIL.COM" required disabled={isAuthenticating}/>
            </div>


            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-1 tracking-widest">PASSWORD</label>
              <input  type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-3 focus:border-blue-500 outline-none disabled:bg-gray-50" placeholder="••••••" required disabled={isAuthenticating}/>
            
            
            </div>
            <button disabled={isAuthenticating} className="w-full bg-blue-600 text-white py-4 rounded-xl font-black hover:bg-black transition-all flex items-center justify-center disabled:opacity-70">
              {isAuthenticating ? (
                <>
                  <Spinner size="sm"/> VERIFYING...
                </> ) : (  "Login")}
            </button>
            {message && <p className="text-[10px] text-red-600 font-bold text-center mt-2">{message}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 p-4">
      <div className="flex justify-between items-end border-b-4 pb-4">
        <div><br/><br/>
          <h1 className="text-4xl font-black">Admin Panel</h1>
          <p className="text-blue-600 font-black">USER CREATION & MODERATION MODULE</p>
        </div>
        <button  onClick={() => setIsAuthorized(false)} className="bg-black text-white px-4 py-2 rounded-lg text-xs font-black hover:bg-gray-800 transition"> logout </button>
      </div>
      
      <div className="bg-white p-10 rounded-3xl border-2 border-gray-100 shadow-sm">
        <h2 className="text-xl font-black mb-6 tracking-tight">Add new user</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-1">Email:</label>
                <input  type="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-4 focus:border-blue-500 outline-none transition-all disabled:bg-gray-50" 
                  placeholder="USER@EXAMPLE.COM" required disabled={isCreatingUser}/>
              </div>   


              <div>
                <label className="block text-[10px] font-black text-gray-400 mb-1">password:</label>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 focus:border-blue-500 outline-none transition-all disabled:bg-gray-50"  placeholder="••••••••" required disabled={isCreatingUser}/>
              </div>
            
            </div>


            <div className="space-y-4">
              <div>
            
                <label className="block text-[10px] font-black text-gray-400 mb-1">Image Url</label>
                <input  type="url"  value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full border-2 border-gray-100 rounded-xl p-4 focus:border-blue-500 outline-none transition-all h-[132px] disabled:bg-gray-50" 
                  placeholder="HTTPS://IMG.JPG" required disabled={isCreatingUser}/>
              </div>
            </div>
          </div>
          
          <button  type="submit" disabled={isCreatingUser}
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black shadow-xl shadow-blue-100 hover:bg-blue-500 transition-all transform flex items-center justify-center">
            {isCreatingUser ? (
              <>
                <Spinner size="sm"/> AUTHORIZING...</>
            ) : ( "Add new user")}
          </button>
          {message && (
            <div className={`p-4 rounded-xl text-xs font-black text-center flex items-center justify-center ${message.startsWith('ERROR') ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
              {!message.startsWith('ERROR') && message !== 'SUCCESS: DATA RECORDED' && <Spinner size="sm"/>}
              {message}
            </div>
          )}
        </form>
      </div><br/><br/><br/>
      </div>
  );
}