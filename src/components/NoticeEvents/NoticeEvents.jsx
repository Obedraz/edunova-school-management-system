import "./NoticeEvents.css";
import { FaCalendarAlt, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const notices = [
  {
    title: "Admissions Open for 2026-27",
    date: "10 Jul 2026",
  },
  {
    title: "PTM Scheduled for Grade X",
    date: "18 Jul 2026",
  },
  {
    title: "Science Fair Registration",
    date: "24 Jul 2026",
  },
  {
    title: "Holiday Notice",
    date: "29 Jul 2026",
  },
];

const events = [
  {
    day: "15",
    month: "JUL",
    title: "Annual Sports Meet",
    venue: "School Ground",
  },
  {
    day: "22",
    month: "JUL",
    title: "Science Exhibition",
    venue: "Main Hall",
  },
  {
    day: "05",
    month: "AUG",
    title: "Independence Day Practice",
    venue: "Auditorium",
  },
  {
    day: "18",
    month: "AUG",
    title: "Parent Teacher Meeting",
    venue: "Conference Hall",
  },
];

const NoticeEvents = () => {
  return (
    <section className="notice-events">

      <div className="container notice-events-grid">

        {/* Notices */}

        <div className="notice-column">

          <div className="column-header">

            <div>
              <span className="section-badge">
                NOTICE BOARD
              </span>

              <h2>Latest Notices</h2>
            </div>

            <button>View All</button>

          </div>

          {notices.map((notice, index) => (

            <div className="notice-item" key={index}>

              <div className="notice-date">

                <FaCalendarAlt />

                <span>{notice.date}</span>

              </div>

              <h3>{notice.title}</h3>

              <a href="#">

                Read More

                <FaArrowRight />

              </a>

            </div>

          ))}

        </div>

        {/* Events */}

        <div className="events-column">

          <div className="column-header">

            <div>

              <span className="section-badge">
                EVENTS
              </span>

              <h2>Upcoming Events</h2>

            </div>

            <button>Calendar</button>

          </div>

          {events.map((event, index) => (

            <div className="event-item" key={index}>

              <div className="event-date-box">

                <h3>{event.day}</h3>

                <span>{event.month}</span>

              </div>

              <div>

                <h4>{event.title}</h4>

                <p>

                  <FaMapMarkerAlt />

                  {event.venue}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default NoticeEvents;