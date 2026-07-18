import "../styles/teachers.css";

import TeacherStats from "../components/teachers/TeacherStats";
import TeacherSearch from "../components/teachers/TeacherSearch";
import TeacherTable from "../components/teachers/TeacherTable";

const Teachers = () => {
  return (
    <div className="teachers-page">

      <div className="page-header">

        <div>
          <h1>Teacher Management</h1>
          <p>Manage all teaching staff</p>
        </div>

        <button className="add-teacher-btn">
          + Add Teacher
        </button>

      </div>

      <TeacherStats />

      <TeacherSearch />

      <TeacherTable />

    </div>
  );
};

export default Teachers;