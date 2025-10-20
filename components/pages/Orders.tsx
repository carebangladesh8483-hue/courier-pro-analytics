// components/pages/Orders.tsx
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function Orders() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Header />
        <h1 className="text-2xl font-bold mb-4">Orders</h1>
        <p className="text-gray-600">
          Here you can view, manage, and track all your orders.
        </p>
        <table className="min-w-full mt-6 bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">#1001</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">Delivered</td>
            </tr>
            <tr>
              <td className="p-2">#1002</td>
              <td className="p-2">Jane Smith</td>
              <td className="p-2">Processing</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
