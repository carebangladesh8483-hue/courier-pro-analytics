// components/pages/Employees.tsx
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function Employees() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Header />
        <h1 className="text-2xl font-bold mb-4">Employees</h1>
        <p className="text-gray-600 mb-4">
          Manage your team members, roles, and contact information here.
        </p>

        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Position</th>
              <th className="p-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">John Doe</td>
              <td className="p-2">Delivery Manager</td>
              <td className="p-2">john@example.com</td>
            </tr>
            <tr>
              <td className="p-2">Jane Smith</td>
              <td className="p-2">Support Lead</td>
              <td className="p-2">jane@example.com</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
