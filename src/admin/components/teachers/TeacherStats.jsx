import "../../styles/teacherStats.css";

const TeacherStats = () => {
  return (
    <div className="teacher-stats">

      <div className="teacher-stat">
        <h2>86</h2>
        <p>Total Teachers</p>
      </div>

      <div className="teacher-stat">
        <h2>74</h2>
        <p>Active</p>
      </div>

      <div className="teacher-stat">
        <h2>12</h2>
        <p>On Leave</p>
      </div>

      <div className="teacher-stat">
        <h2>15</h2>
        <p>Departments</p>
      </div>

    </div>
  );
};

export default TeacherStats;