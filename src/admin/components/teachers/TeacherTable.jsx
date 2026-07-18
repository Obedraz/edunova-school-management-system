import "../../styles/teacherTable.css";

import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const TeacherTable = ({ teachers, deleteTeacher }) => {
  return (
    <div className="teacher-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Teacher</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th align="center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>

                <td>{teacher.name}</td>

                <td>{teacher.department}</td>

                <td>{teacher.email}</td>

                <td>{teacher.phone}</td>

                <td>
                  <span
                    className={`status ${
                      teacher.status === "Active"
                        ? "active"
                        : "leave"
                    }`}
                  >
                    {teacher.status}
                  </span>
                </td>

                <td className="actions">
                  <button
                    className="view-btn"
                    title="View Teacher"
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    title="Edit Teacher"
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="delete-btn"
                    title="Delete Teacher"
                    onClick={() => deleteTeacher(teacher.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="no-data"
              >
                No teachers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;