import "../../styles/teacherSearch.css";

const TeacherSearch = ({ search, setSearch }) => {
  return (
    <div className="teacher-search">
      <input
        type="text"
        placeholder="Search by name, department or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select>
        <option>All Departments</option>
        <option>Science</option>
        <option>Mathematics</option>
        <option>English</option>
        <option>Commerce</option>
        <option>Computer Science</option>
      </select>
    </div>
  );
};

export default TeacherSearch;