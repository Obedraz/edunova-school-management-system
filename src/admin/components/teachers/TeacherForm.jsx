import { useState } from "react";
import "../../styles/teacherForm.css";

const TeacherForm = ({ addTeacher, onClose }) => {
  const [teacher, setTeacher] = useState({
    name: "",
    department: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setTeacher((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTeacher(teacher);

    setTeacher({
      name: "",
      department: "",
      email: "",
      phone: "",
      status: "Active",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="teacher-modal">
        <div className="modal-header">
          <h2>Add Teacher</h2>

          <button
            type="button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          className="teacher-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Teacher Name"
            value={teacher.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={teacher.department}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={teacher.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={teacher.phone}
            onChange={handleChange}
            required
          />

          <select
            name="status"
            value={teacher.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
          </select>

          <button type="submit">
            Save Teacher
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherForm;