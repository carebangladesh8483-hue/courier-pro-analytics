// components/pages/Reports.tsx
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function Reports() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Header />
        <h1 className="text-2xl font-bold mb-4">Reports</h1>
        <p className="text-gray-600 mb-4">
          Here you can generate and view system reports or analytics summaries.
        </p>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h2 className="text-lg font-semibold mb-2">Monthly Summary</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Total Orders: 243</li>
            <li>Total Revenue: $12,540</li>
            <li>Active Users: 321</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
