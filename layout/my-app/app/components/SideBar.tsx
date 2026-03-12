import Link from "next/link";
export default function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "#dadff5", height:"670px", margin:"10px"}}>
      <ul>
        <li>
          <Link href="/dashboard/admin">Admin</Link>
        </li>
        <li>
          <Link href="/dashboard/manager">Manager</Link>
        </li>
        <li>
          <Link href="/dashboard/user">User</Link>
        </li>
      </ul>
    </aside>
  );
}