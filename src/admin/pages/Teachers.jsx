import { useMemo, useState } from "react";

import "../styles/teachers.css";

import TeacherStats from "../components/teachers/TeacherStats";
import TeacherSearch from "../components/teachers/TeacherSearch";
import TeacherTable from "../components/teachers/TeacherTable";
import TeacherForm from "../components/teachers/TeacherForm";

import teacherData from "../data/teachers";

const Teachers = () => {
  const [teachers, setTeachers] = useState(teacherData);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Add / Update Faculty
  const addTeacher = (teacher) => {
    if (isEditing) {
      setTeachers((prev) =>
        prev.map((item) =>
          item.id === teacher.id ? teacher : item
        )
      );
    } else {
      setTeachers((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...teacher,
        },
      ]);
    }

    setIsModalOpen(false);
    setSelectedTeacher(null);
    setIsEditing(false);
  };

  // Delete
  const deleteTeacher = (id) => {
    if (!window.confirm("Delete this faculty member?")) return;

    setTeachers((prev) =>
      prev.filter((teacher) => teacher.id !== id)
    );
  };

  // View
  const viewTeacher = (teacher) => {
    alert(
      `Faculty Details\n\nName: ${teacher.name}\nDepartment: ${teacher.department}\nStatus: ${teacher.status}`
    );
  };

  // Edit
  const editTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Search
  const filteredTeachers = useMemo(() => {
    const keyword = search.toLowerCase();

    return teachers.filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(keyword) ||
        teacher.department.toLowerCase().includes(keyword);

      const matchesDepartment =
        department === "All" ||
        teacher.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [teachers, search, department]);

  return (
    <div className="teachers-page">
      <div className="page-header">
        <div>
          <h1>Faculty Management</h1>
          <p>Manage faculty members displayed on the website.</p>
        </div>

        <button
          className="add-teacher-btn"
          onClick={() => {
            setSelectedTeacher(null);
            setIsEditing(false);
            setIsModalOpen(true);
          }}
        >
          + Add Faculty
        </button>
      </div>

      <TeacherStats teachers={teachers} />

      <TeacherSearch
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
      />

      <TeacherTable
        teachers={filteredTeachers}
        deleteTeacher={deleteTeacher}
        viewTeacher={viewTeacher}
        editTeacher={editTeacher}
      />

      {isModalOpen && (
        <TeacherForm
          addTeacher={addTeacher}
          teacher={selectedTeacher}
          isEditing={isEditing}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedTeacher(null);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default Teachers;