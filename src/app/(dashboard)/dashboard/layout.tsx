import React, { ReactNode } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen grid md:grid-cols-[220px_1fr]">
      {/* Sidebar */}
      <aside className="border-r p-4">
        <div className="mb-6 font-bold">Dashboard</div>
        <nav className="grid gap-2 text-sm">
          <Link href="/dashboard" className="hover:underline">
            Overview
          </Link>
          <Link href="/dashboard/settings" className="hover:underline">
            Settings
          </Link>
          <Link href="/" className="hover:underline">
            Back to Site
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="p-6">
        <header className="border-b mb-6 pb-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;