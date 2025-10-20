
import React, { useState, useCallback } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/pages/Dashboard';
import Orders from './components/pages/Orders';
import Employees from './components/pages/Employees';
import Reports from './components/pages/Reports';
import Settings from './components/pages/Settings';

export type Page = 'Dashboard' | 'Orders' | 'Employees' | 'Reports' | 'Settings';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Orders':
        return <Orders />;
      case 'Employees':
        return <Employees />;
      case 'Reports':
        return <Reports />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  }, [currentPage]);

  return (
    <div className="flex h-screen bg-slate-100 text-slate-800">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentPage={currentPage} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
