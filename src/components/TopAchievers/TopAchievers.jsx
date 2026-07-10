import "./TopAchievers.css";
import {
  FaMedal,
  FaArrowRight,
} from "react-icons/fa";

const achievers = [
  {
    name: "Aarav Sharma",
    marks: "99.4%",
    stream: "Science",
    image: "https://placehold.co/300x350",
  },
  {
    name: "Ananya Patel",
    marks: "98.9%",
    stream: "Commerce",
    image: "https://placehold.co/300x350",
  },
  {
    name: "Rohan Verma",
    marks: "98.6%",
    stream: "Science",
    image: "https://placehold.co/300x350",
  },
];

const TopAchievers = () => {
  return (
    <section className="top-achievers">

      <div className="container">

        <div className="section-heading">

          <span className="section-badge">
            TOP ACHIEVERS
          </span>

          <h2>Celebrating Student Success</h2>

          <p>
            Our students continue to excel in academics,
            leadership, sports and innovation.
          </p>

        </div>

        <div className="achievers-grid">

          {achievers.map((student, index) => (

            <div className="student-card" key={index}>

              <img
                src={student.image}
                alt={student.name}
              />

              <div className="student-info">

                <FaMedal className="medal" />

                <h3>{student.name}</h3>

                <p>{student.stream}</p>

                <h4>{student.marks}</h4>

              </div>

            </div>

          ))}

        </div>

        <div className="view-all">

          <button>

            View All Achievements

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
};

export default TopAchievers;