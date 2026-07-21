import { useState } from "react";
import academicsData from "../data/academics";
import "../styles/academics.css";

const Academics = () => {
  const [academics, setAcademics] = useState(academicsData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    status: "Published",
  });

  const filteredAcademics = academics.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      status === "All" || item.status === status;

    return matchSearch && matchStatus;
  });

  const resetForm = () => {
    setShowModal(false);
    setIsEditing(false);

    setFormData({
      id: null,
      title: "",
      description: "",
      status: "Published",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setAcademics(
        academics.map((item) =>
          item.id === formData.id ? formData : item
        )
      );
    } else {
      setAcademics([
        ...academics,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    resetForm();
  };

  const editAcademic = (item) => {
    setFormData(item);
    setIsEditing(true);
    setShowModal(true);
  };

  const deleteAcademic = (id) => {
    if (window.confirm("Delete this academic record?")) {
      setAcademics(
        academics.filter((item) => item.id !== id)
      );
    }
  };

  const viewAcademic = (item) => {
    alert(
      `Title : ${item.title}
Description : ${item.description}
Status : ${item.status}`
    );
  };

  return (
    <div className="academics-container">
      <div className="academics-header">
        <h2>Academics</h2>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Academic
        </button>
      </div>

      <div className="academics-stats">
        <div className="stat-card">
          <h3>{academics.length}</h3>
          <p>Total Records</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              academics.filter(
                (a) => a.status === "Published"
              ).length
            }
          </h3>
          <p>Published</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              academics.filter(
                (a) => a.status === "Hidden"
              ).length
            }
          </h3>
          <p>Hidden</p>
        </div>
      </div>

      <div className="academic-search">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Published</option>
          <option>Hidden</option>
        </select>
      </div>

      <table className="academics-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredAcademics.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.description}</td>

              <td>
                <span
                  className={`status ${item.status.toLowerCase()}`}
                >
                  {item.status}
                </span>
              </td>

              <td className="actions">
                <button
                  className="view-btn"
                  onClick={() => viewAcademic(item)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => editAcademic(item)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteAcademic(item.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>
              {isEditing
                ? "Edit Academic"
                : "Add Academic"}
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />

              <textarea
                placeholder="Description"
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
              />

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value,
                  })
                }
              >
                <option>Published</option>
                <option>Hidden</option>
              </select>

              <div className="modal-buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={resetForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                >
                  {isEditing
                    ? "Update Academic"
                    : "Save Academic"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Academics;