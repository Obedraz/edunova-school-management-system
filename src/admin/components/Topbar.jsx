import "./../styles/topbar.css";

import {
  FaSearch,
  FaBell,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="topbar">

      <div className="topbar-left">
        <h2>Dashboard</h2>
        <span>{today}</span>
      </div>

      <div className="topbar-center">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

      </div>

      <div className="topbar-right">

        <button className="topbar-icon">
          <FaBell />
        </button>

        <button className="topbar-icon">
          <FaCog />
        </button>

        <div className="admin-info">

          <FaUserCircle className="admin-avatar" />

          <div>
            <h4>Administrator</h4>
            <span>Super Admin</span>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;