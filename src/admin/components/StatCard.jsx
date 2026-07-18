import "./../styles/statCard.css";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div
          className="stat-card-icon"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        <div className="stat-card-content">
          <h2>{value}</h2>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;