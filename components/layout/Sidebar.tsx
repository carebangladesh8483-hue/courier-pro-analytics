// components/layout/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="p-4 bg-gray-100 border-r border-gray-200 min-h-screen">
      <h2 className="text-lg font-semibold">Sidebar</h2>
      <ul className="mt-3 space-y-2 text-sm">
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
