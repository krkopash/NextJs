import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    {name: "User List", href: "/dashboard/user" },
    {name: "Admin Panel", href: "/dashboard/admin" },
    { name: "user Gallery", href: "/dashboard/img" },
  ];

  return (
    <aside className="w-64 bg-[#dadff5] p-4 m-2 h-full min-h-[calc(100vh-64px)]">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link  href={item.href}  className="block p-2 hover:bg-blue-500 hover:text-white rounded transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}