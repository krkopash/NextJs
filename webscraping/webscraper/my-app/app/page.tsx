'use client'
import { useSearchParams } from "next/navigation";
export default function HomePage() {
  // const { isEnabled } =await draftMode()

  // const user = {name: "user", role: "user"};
  const searchparams = useSearchParams();
  const name = searchparams.get("name");
  const role=searchparams.get("role");
  return (
    <div>
      {/* <p>draft mode is {isEnabled? 'enabled':'disabled'}</p> */}
      <h1>home Page</h1>
      <p>Welcome, {name}</p>
      <p>Role: {role}</p>

      
    </div>
  );
}