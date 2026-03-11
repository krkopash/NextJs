import type { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import cookie from "cookie"

const SECRET = "mysecret"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body
  if (username === "admin" && password === "1234") {
    const token = jwt.sign(
      { username },SECRET,
    )

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        path: "/",
      })
    )
    return res.json({ message: "Login successful" })
  }
  res.json({ message: "enter valid data" })
}