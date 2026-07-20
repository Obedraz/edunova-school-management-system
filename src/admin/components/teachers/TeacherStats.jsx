import "./../../styles/teacherStats.css";

const TeacherStats = ({ teachers }) => {
  const total = teachers.length;
  const active = teachers.filter(
    (teacher) => teacher.status === "Active"
  ).length;
  const hidden = teachers.filter(
    (teacher) => teacher.status === "Hidden"
  ).length;

  const stats = [
    { title: "Total Faculty", value: total },
    { title: "Active", value: active },
    { title: "Hidden", value: hidden },
  ];

  return (
    <div className="teacher-stats">
      {stats.map((stat) => (
        <div className="teacher-stat-card" key={stat.title}>
          <h3>{stat.value}</h3>
          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TeacherStats;