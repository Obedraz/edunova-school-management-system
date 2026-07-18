import "./../styles/sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBookOpen,
  FaImages,
  FaAward,
  FaCamera,
  FaBullhorn,
  FaCalendarAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
    { name: "Teachers", icon: <FaChalkboardTeacher />, path: "/admin/teachers" },
    { name: "Admissions", icon: <FaUserGraduate />, path: "/admin/admissions" },
    { name: "Academics", icon: <FaBookOpen />, path: "/admin/academics" },
    { name: "Gallery", icon: <FaImages />, path: "/admin/gallery" },
    { name: "Achievements", icon: <FaAward />, path: "/admin/achievements" },
    { name: "Memories", icon: <FaCamera />, path: "/admin/memories" },
    { name: "Notices", icon: <FaBullhorn />, path: "/admin/notices" },
    { name: "Events", icon: <FaCalendarAlt />, path: "/admin/events" },
    { name: "Contact", icon: <FaEnvelope />, path: "/admin/contact" },
    { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>EduNova</h2>
        <span>School ERP</span>
      </div>

      <div className="admin-profile">
        <div className="profile-avatar">A</div>

        <div>
          <h4>Administrator</h4>
          <p>admin@edunova.com</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;