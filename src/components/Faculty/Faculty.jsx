import "./Faculty.css";

import teacher1 from "../../assets/images/faculty/teacher1.jpg";
import teacher2 from "../../assets/images/faculty/teacher2.jpg";
import teacher3 from "../../assets/images/faculty/teacher3.jpg";
import teacher4 from "../../assets/images/faculty/teacher4.jpg";

const faculty = [
  {
    image: teacher1,
    name: "Dr.A P J Abdul Kalam",
    designation: "Principal",
    qualification: "M.Ed, Ph.D",
    experience: "22 Years Experience",
  },
  {
    image: teacher2,
    name: "Narendar Modi",
    designation: "Head of Mathematics",
    qualification: "M.Sc Mathematics",
    experience: "15 Years Experience",
  },
  {
    image: teacher3,
    name: "Rahul Gandhi",
    designation: "Science Department",
    qualification: "M.Sc Physics",
    experience: "12 Years Experience",
  },
  {
    image: teacher4,
    name: "Mamta Banarjee",
    designation: "English Department",
    qualification: "M.A English",
    experience: "10 Years Experience",
  },
];

const Faculty = () => {
  return (
    <section className="faculty">

      <div className="container">

        <div className="section-heading">

          <span className="section-badge">
            OUR FACULTY
          </span>

          <h2>
            Meet Our Dedicated Educators
          </h2>

          <p>
            Experienced educators committed to inspiring young
            minds through knowledge, innovation and values.
          </p>

        </div>

        <div className="faculty-grid">

          {faculty.map((teacher, index) => (

            <div className="faculty-card" key={index}>

              <div className="faculty-image">

                <img
                  src={teacher.image}
                  alt={teacher.name}
                />

              </div>

              <div className="faculty-info">

                <h3>{teacher.name}</h3>

                <h4>{teacher.designation}</h4>

                <p className="qualification">
                  {teacher.qualification}
                </p>

                <div className="experience">
                  {teacher.experience}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Faculty;