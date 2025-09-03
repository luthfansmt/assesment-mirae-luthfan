export default function Sidebar() {
  const menus = [
    "Global Overview",
    "P&L",
    "Asset",
    "Key Indicators",
    "Hong Kong",
    "GFOC",
    "New York",
    "Vietnam",
    "MOCH",
    "MCOC",
    "Brazil",
  ];

  return (
    <aside className="w-56 bg-blue-900 text-white min-h-screen p-4">
      <h2 className="font-bold text-lg mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {menus.map((menu, i) => (
          <li key={i} className="hover:bg-blue-700 p-2 rounded cursor-pointer">
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
}
