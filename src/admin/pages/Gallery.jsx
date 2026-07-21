import { useState } from "react";
import galleryData from "../data/gallery";
import "../styles/gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState(galleryData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    category: "",
    image: "",
    status: "Published",
  });

  const filteredGallery = gallery.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      status === "All" || item.status === status;

    return matchSearch && matchStatus;
  });

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const resetForm = () => {
    setShowModal(false);
    setIsEditing(false);

    setFormData({
      id: null,
      title: "",
      category: "",
      image: "",
      status: "Published",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setGallery(
        gallery.map((item) =>
          item.id === formData.id ? formData : item
        )
      );
    } else {
      setGallery([
        ...gallery,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    resetForm();
  };

  const editImage = (item) => {
    setFormData(item);
    setIsEditing(true);
    setShowModal(true);
  };

  const deleteImage = (id) => {
    if (window.confirm("Delete this image?")) {
      setGallery(gallery.filter((item) => item.id !== id));
    }
  };

  const viewImage = (item) => {
    alert(
      `Title : ${item.title}
Category : ${item.category}
Status : ${item.status}`
    );
  };

  return (
    <div className="gallery-container">

      <div className="gallery-header">
        <h2>Gallery</h2>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Image
        </button>
      </div>

      <div className="gallery-stats">
        <div className="stat-card">
          <h3>{gallery.length}</h3>
          <p>Total Images</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              gallery.filter(
                (g) => g.status === "Published"
              ).length
            }
          </h3>
          <p>Published</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              gallery.filter(
                (g) => g.status === "Hidden"
              ).length
            }
          </h3>
          <p>Hidden</p>
        </div>
      </div>

      <div className="gallery-search">
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

      <table className="gallery-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredGallery.map((item) => (
            <tr key={item.id}>
              <td>
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="gallery-image"
                  />
                ) : (
                  <div className="gallery-placeholder">
                    No Image
                  </div>
                )}
              </td>

              <td>{item.title}</td>

              <td>{item.category}</td>

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
                  onClick={() => viewImage(item)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => editImage(item)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteImage(item.id)}
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
              {isEditing ? "Edit Image" : "Add Image"}
            </h3>

            <form onSubmit={handleSubmit}>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
              />

              {formData.image && (
                <img
                  src={formData.image}
                  alt=""
                  className="preview-image"
                />
              )}

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
                    ? "Update Image"
                    : "Save Image"}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;