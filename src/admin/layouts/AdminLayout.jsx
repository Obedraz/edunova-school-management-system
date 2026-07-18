import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/adminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="admin-main">
        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;