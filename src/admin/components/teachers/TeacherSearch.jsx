import "../../styles/teacherSearch.css";

const TeacherSearch = ({
  search,
  setSearch,
  department,
  setDepartment,
}) => {
  return (
    <div className="teacher-search">
      <input
        type="text"
        placeholder="Search faculty..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Science">Science</option>
        <option value="English">English</option>
        <option value="Kannada">Kannada</option>
        <option value="Hindi">Hindi</option>
        <option value="Social Science">Social Science</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Commerce">Commerce</option>
        <option value="Physical Education">Physical Education</option>
        <option value="Arts">Arts</option>
      </select>
    </div>
  );
};

export default TeacherSearch;