import { useEffect, useState } from "react";
import "../../styles/teacherForm.css";

const TeacherForm = ({
  addTeacher,
  teacher,
  isEditing,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    department: "",
    status: "Active",
    photo: "",
  });

  useEffect(() => {
    if (teacher) {
      setFormData(teacher);
    }
  }, [teacher]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      photo: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTeacher(formData);

    setFormData({
      id: null,
      name: "",
      department: "",
      status: "Active",
      photo: "",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="teacher-modal">

        <div className="modal-header">
          <h2>
            {isEditing ? "Edit Faculty" : "Add Faculty Member"}
          </h2>

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
          <label>Faculty Photo</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {formData.photo && (
            <img
              src={formData.photo}
              alt="Preview"
              className="teacher-photo"
            />
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>Kannada</option>
            <option>Hindi</option>
            <option>Social Science</option>
            <option>Computer Science</option>
            <option>Commerce</option>
            <option>Physical Education</option>
            <option>Arts</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Hidden">Hidden</option>
          </select>

          <button type="submit">
            {isEditing ? "Update Faculty" : "Save Faculty"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default TeacherForm;