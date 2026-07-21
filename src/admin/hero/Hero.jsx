import { useState } from "react";
import heroData from "../../data/hero";
import "../../styles/hero.css";

const Hero = () => {
  const [slides, setSlides] = useState(heroData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    subtitle: "",
    buttonText: "",
    image: "",
    status: "Published",
  });

  const filteredSlides = slides.filter((slide) => {
    const matchSearch = slide.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      status === "All" || slide.status === status;

    return matchSearch && matchStatus;
  });

  const resetForm = () => {
    setShowModal(false);
    setIsEditing(false);

    setFormData({
      id: null,
      title: "",
      subtitle: "",
      buttonText: "",
      image: "",
      status: "Published",
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setSlides(
        slides.map((slide) =>
          slide.id === formData.id ? formData : slide
        )
      );
    } else {
      setSlides([
        ...slides,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    resetForm();
  };

  const editSlide = (slide) => {
    setFormData(slide);
    setIsEditing(true);
    setShowModal(true);
  };

  const deleteSlide = (id) => {
    if (window.confirm("Delete this slide?")) {
      setSlides(slides.filter((slide) => slide.id !== id));
    }
  };

  const viewSlide = (slide) => {
    alert(
`Title : ${slide.title}
Subtitle : ${slide.subtitle}
Button : ${slide.buttonText}
Status : ${slide.status}`
    );
  };

  return (
    <div className="hero-container">
      <div className="hero-header">
        <h2>Hero Slider</h2>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Slide
        </button>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <h3>{slides.length}</h3>
          <p>Total Slides</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              slides.filter(
                (s) => s.status === "Published"
              ).length
            }
          </h3>
          <p>Published</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              slides.filter(
                (s) => s.status === "Hidden"
              ).length
            }
          </h3>
          <p>Hidden</p>
        </div>
      </div>

      <div className="hero-search">
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

      <table className="hero-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Button</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredSlides.map((slide) => (
            <tr key={slide.id}>
              <td>
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt=""
                    className="hero-image"
                  />
                ) : (
                  <div className="hero-placeholder">
                    No Image
                  </div>
                )}
              </td>

              <td>{slide.title}</td>
              <td>{slide.subtitle}</td>
              <td>{slide.buttonText}</td>

              <td>
                <span
                  className={`status ${slide.status.toLowerCase()}`}
                >
                  {slide.status}
                </span>
              </td>

              <td className="actions">
                <button
                  className="view-btn"
                  onClick={() => viewSlide(slide)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => editSlide(slide)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteSlide(slide.id)}
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
              {isEditing ? "Edit Slide" : "Add Slide"}
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
                placeholder="Subtitle"
                required
                value={formData.subtitle}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subtitle: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Button Text"
                required
                value={formData.buttonText}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    buttonText: e.target.value,
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
                  {isEditing ? "Update Slide" : "Save Slide"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;