import "../styles/dashboard.css";
import StatCard from "../components/StatCard";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaImages,
  FaBullhorn,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Administrator 👋</p>
      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <StatCard
          title="Students"
          value="1284"
          icon={<FaUserGraduate />}
          color="#0A2A66"
        />

        <StatCard
          title="Teachers"
          value="86"
          icon={<FaChalkboardTeacher />}
          color="#16A34A"
        />

        <StatCard
          title="Admissions"
          value="34"
          icon={<FaClipboardList />}
          color="#F59E0B"
        />

        <StatCard
          title="Gallery Images"
          value="562"
          icon={<FaImages />}
          color="#9333EA"
        />

      </div>

      {/* Dashboard Content */}
      <div className="dashboard-grid">

        {/* Today's Overview */}
        <div className="dashboard-card">
          <h3>📊 Today's Overview</h3>

          <ul>
            <li>📝 New Admission Requests : <strong>8</strong></li>
            <li>👥 Visitors Today : <strong>245</strong></li>
            <li>📢 Notices Published : <strong>2</strong></li>
            <li>📅 Events This Week : <strong>3</strong></li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <h3>⚡ Quick Actions</h3>

          <div className="quick-actions">

            <button className="action-btn">
              <FaChalkboardTeacher />
              Add Teacher
            </button>

            <button className="action-btn">
              <FaBullhorn />
              Publish Notice
            </button>

            <button className="action-btn">
              <FaImages />
              Upload Gallery
            </button>

            <button className="action-btn">
              <FaCalendarAlt />
              Create Event
            </button>

            <button className="action-btn">
              <FaAward />
              Add Achievement
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;