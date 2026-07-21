import { useState } from "react";
import eventsData from "../data/events";
import "../styles/events.css";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    date: "",
    location: "",
    image: "",
    status: "Published",
  });

  const filteredEvents = events.filter((event) => {
    const matchSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      status === "All" || event.status === status;

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setEvents(
        events.map((event) =>
          event.id === formData.id ? formData : event
        )
      );
    } else {
      setEvents([
        ...events,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    resetForm();
  };

  const resetForm = () => {
    setShowModal(false);
    setIsEditing(false);

    setFormData({
      id: null,
      title: "",
      date: "",
      location: "",
      image: "",
      status: "Published",
    });
  };

  const editEvent = (event) => {
    setFormData(event);
    setIsEditing(true);
    setShowModal(true);
  };

  const deleteEvent = (id) => {
    if (window.confirm("Delete this event?")) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  const viewEvent = (event) => {
    alert(
      `Title : ${event.title}
Date : ${event.date}
Location : ${event.location}
Status : ${event.status}`
    );
  };

  return (
    <div className="events-container">

      <div className="events-header">
        <h2>Events</h2>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Event
        </button>
      </div>

      <div className="event-stats">
        <div className="stat-card">
          <h3>{events.length}</h3>
          <p>Total Events</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              events.filter(
                (e) => e.status === "Published"
              ).length
            }
          </h3>
          <p>Published</p>
        </div>

        <div className="stat-card">
          <h3>
            {
              events.filter(
                (e) => e.status === "Hidden"
              ).length
            }
          </h3>
          <p>Hidden</p>
        </div>
      </div>

      <div className="event-search">
        <input
          type="text"
          placeholder="Search event..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>All</option>
          <option>Published</option>
          <option>Hidden</option>
        </select>
      </div>

      <table className="event-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td>
                {event.image ? (
                  <img
                    src={event.image}
                    alt=""
                    className="event-image"
                  />
                ) : (
                  <div className="event-placeholder">
                    No Image
                  </div>
                )}
              </td>

              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>

              <td>
                <span
                  className={`status ${event.status.toLowerCase()}`}
                >
                  {event.status}
                </span>
              </td>

              <td className="actions">
                <button
                  className="view-btn"
                  onClick={() =>
                    viewEvent(event)
                  }
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() =>
                    editEvent(event)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteEvent(event.id)
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
                ? "Edit Event"
                : "Add Event"}
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
                placeholder="Event Title"
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

              <input
                type="text"
                placeholder="Location"
                required
                value={formData.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value,
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
                    ? "Update Event"
                    : "Save Event"}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Events;