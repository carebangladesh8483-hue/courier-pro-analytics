// components/pages/Dashboard.tsx
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Header />
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your dashboard! You can add charts, analytics, and reports here.
        </p>
      </main>
    </div>
  );
}
