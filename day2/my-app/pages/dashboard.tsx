import { GetServerSideProps } from "next"
import jwt from "jsonwebtoken"
import Link from "next/link"
const SECRET = "mysecret"

export default function Dashboard({ user }: any) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.username}</p>
      <Link href="/login"> <button>go to login page</button></Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.token
  if (!token) {
    return {
      redirect: { destination: "/login", permanent: false}
    }
  }
  try {
    const decoded = jwt.verify(token, SECRET)
    return {
      props: { user: decoded}
    }

  } catch {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }
}