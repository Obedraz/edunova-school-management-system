import { useState } from "react";
import achievementsData from "../data/achievements";
import "../styles/achievements.css";

const Achievements = () => {
  const [achievements, setAchievements] = useState(achievementsData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    category: "",
    achievedBy: "",
    date: "",
    status: "Published",
  });

  const filteredAchievements = achievements.filter((item) => {
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
      category: "",
      achievedBy: "",
      date: "",
      status: "Published",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setAchievements(
        achievements.map((item) =>
          item.id === formData.id ? formData : item
        )
      );
    } else {
      setAchievements([
        ...achievements,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    resetForm();
  };

  const editAchievement = (item) => {
    setFormData(item);
    setIsEditing(true);
    setShowModal(true);
  };

  const deleteAchievement = (id) => {
    if (window.confirm("Delete this achievement?")) {
      setAchievements(
        achievements.filter((item) => item.id !== id)
      );
    }
  };

  const viewAchievement = (item) => {
    alert(
      `Title : ${item.title}
Category : ${item.category}
Achieved By : ${item.achievedBy}
Date : ${item.date}
Status : ${item.status}`
    );
  };

  return (
    <div className="achievements-container">

      <div className="achievements-header">
        <h2>Achievements</h2>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Achievement
        </button>
      </div>

      <div className="achievements-stats">
        <div className="stat-card">
          <h3>{achievements.length}</h3>
          <p>Total Achievements</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              achievements.filter(
                (a) => a.status === "Published"
              ).length
            }
          </h3>
          <p>Published</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              achievements.filter(
                (a) => a.status === "Hidden"
              ).length
            }
          </h3>
          <p>Hidden</p>
        </div>
      </div>

      <div className="achievement-search">
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

      <table className="achievement-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Achieved By</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredAchievements.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.achievedBy}</td>
              <td>{item.date}</td>

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
                  onClick={() => viewAchievement(item)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => editAchievement(item)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteAchievement(item.id)
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
                ? "Edit Achievement"
                : "Add Achievement"}
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Achievement Title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Category"
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Achieved By"
                required
                value={formData.achievedBy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    achievedBy: e.target.value,
                  })
                }
              />

              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
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
                    ? "Update Achievement"
                    : "Save Achievement"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;