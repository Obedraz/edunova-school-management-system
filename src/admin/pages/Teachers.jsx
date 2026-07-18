import { useMemo, useState } from "react";

import "../styles/teachers.css";

import TeacherStats from "../components/teachers/TeacherStats";
import TeacherSearch from "../components/teachers/TeacherSearch";
import TeacherTable from "../components/teachers/TeacherTable";
import TeacherForm from "../components/teachers/TeacherForm";

import teacherData from "../data/teachers";


const Teachers = () => {
    const [search, setSearch] = useState("");
  const [teachers, setTeachers] = useState(teacherData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add Teacher
  const addTeacher = (teacher) => {
    const newTeacher = {
      id: Date.now(),
      ...teacher,
    };

    setTeachers((prevTeachers) => [...prevTeachers, newTeacher]);
    setIsModalOpen(false);
  };

  // Delete Teacher
  const deleteTeacher = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (!confirmDelete) return;

    setTeachers((prevTeachers) =>
      prevTeachers.filter((teacher) => teacher.id !== id)
    );
  };

  const filteredTeachers = useMemo(() => {
  return teachers.filter((teacher) => {
    const keyword = search.toLowerCase();

    return (
      teacher.name.toLowerCase().includes(keyword) ||
      teacher.department.toLowerCase().includes(keyword) ||
      teacher.email.toLowerCase().includes(keyword)
    );
  });
}, [teachers, search]);

  return (
    <div className="teachers-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Teacher Management</h1>
          <p>Manage all teaching staff</p>
        </div>

        <button
          className="add-teacher-btn"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Teacher
        </button>
      </div>

      {/* Statistics */}
      <TeacherStats />

      {/* Search & Filter */}
      <TeacherSearch
  search={search}
  setSearch={setSearch}
/>

      {/* Teacher Table */}
      <TeacherTable
        teachers={filteredTeachers}
        deleteTeacher={deleteTeacher}
      />

      {/* Add Teacher Modal */}
      {isModalOpen && (
        <TeacherForm
          addTeacher={addTeacher}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Teachers;