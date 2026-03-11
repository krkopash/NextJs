import { useState } from "react"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    if (res.ok) {
      window.location.href = "/dashboard"
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="username"
        onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="password"
        onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}