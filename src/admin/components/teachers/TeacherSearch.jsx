import "../../styles/teacherSearch.css";

const TeacherSearch = () => {
  return (
    <div className="teacher-search">

      <input
        type="text"
        placeholder="Search teachers..."
      />

      <select>
        <option>All Departments</option>
        <option>Science</option>
        <option>Mathematics</option>
        <option>Commerce</option>
        <option>Arts</option>
      </select>

    </div>
  );
};

export default TeacherSearch;