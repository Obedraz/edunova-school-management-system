import "../../styles/teacherTable.css";

import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const TeacherTable = ({
  teachers,
  deleteTeacher,
  viewTeacher,
  editTeacher,
}) => {
  return (
    <div className="teacher-table">
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
            <th align="center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>
                  {teacher.photo ? (
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="teacher-photo"
                    />
                  ) : (
                    <div className="teacher-avatar">
                      {teacher.name.charAt(0)}
                    </div>
                  )}
                </td>

                <td>{teacher.name}</td>

                <td>{teacher.department}</td>

                <td>
                  <span
                    className={`status ${
                      teacher.status === "Active"
                        ? "active"
                        : "hidden"
                    }`}
                  >
                    {teacher.status}
                  </span>
                </td>

                <td className="actions">
                  <button
                    className="view-btn"
                    title="View"
                    onClick={() => viewTeacher(teacher)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    title="Edit"
                    onClick={() => editTeacher(teacher)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="delete-btn"
                    title="Delete"
                    onClick={() => deleteTeacher(teacher.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No faculty members found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;