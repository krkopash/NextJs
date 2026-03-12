"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email === "admin@test.com" && password==="admin123") {
      router.push("/dashboard/admin");
    } 
    else if (email === "manager@test.com" && password==="manager123") {
      router.push("/dashboard/manager");
    } 
    else {
      router.push("/dashboard/user");
    }
  };
  return (
    <div style={{backgroundColor:"#e6e9f5", padding:"50px", borderRadius:"20px"}}>
      <h2>Login</h2>
      <label>Enter mail id:</label><br/>
        <input  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
        <label>Enter password:</label><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}