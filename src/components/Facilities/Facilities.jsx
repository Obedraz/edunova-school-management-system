import "./Facilities.css";
import {
  FaSchool,
  FaFlask,
  FaBookOpen,
  FaDesktop,
  FaFutbol,
  FaBus,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaSchool />,
    title: "Modern Campus",
    description:
      "A spacious, green, and secure campus designed to inspire learning.",
  },
  {
    icon: <FaDesktop />,
    title: "Smart Classrooms",
    description:
      "Interactive digital classrooms equipped with advanced technology.",
  },
  {
    icon: <FaFlask />,
    title: "Science Labs",
    description:
      "Fully equipped Physics, Chemistry, and Biology laboratories.",
  },
  {
    icon: <FaBookOpen />,
    title: "Digital Library",
    description:
      "Thousands of books and digital learning resources for students.",
  },
  {
    icon: <FaFutbol />,
    title: "Sports Complex",
    description:
      "Indoor and outdoor sports facilities for holistic development.",
  },
  {
    icon: <FaBus />,
    title: "Transport",
    description:
      "Safe GPS-enabled buses covering all major routes.",
  },
];

const Facilities = () => {
  return (
    <section className="facilities">

      <div className="container">

        <div className="section-heading">

          <span className="section-badge">
            CAMPUS FACILITIES
          </span>

          <h2>Everything Students Need To Grow</h2>

          <p>
            Our campus combines modern infrastructure with
            innovative learning spaces to provide the best
            educational experience.
          </p>

        </div>

        <div className="facilities-grid">

          {facilities.map((item, index) => (

            <div className="facility-card" key={index}>

              <div className="facility-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Facilities;