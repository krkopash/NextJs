import Link from "next/link";

export default function NavBaar() {
  return (
    <nav className="bg-[#dadff5] p-4 flex justify-between font-black">
      <div className="text-2xl font-black italic text-blue-600">Dashboard</div>
      <div className="space-x-6 text-sm hover:text-blue-500 transition-colors">
        <Link href="/dashboard/user">user</Link>
        <Link href="/dashboard/img">gallery</Link>
        <Link href="/" className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-white hover:text-black transition-all">EXIT</Link>
      </div>
    </nav>
  );
}