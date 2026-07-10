import "./Faculty.css";

import facultyBanner from "../assets/images/banners/faculty-banner.jpg";

const Faculty = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="faculty-banner"
        style={{
          backgroundImage: `url(${facultyBanner})`,
        }}
      >
        <div className="faculty-overlay">

          <h1>Our Faculty</h1>

          <p>Home / Faculty</p>

        </div>

      </section>

      {/* Introduction */}

      <section className="faculty-section">

        <div className="faculty-container">

          <span className="faculty-badge">
            OUR EDUCATORS
          </span>

          <h2>
            Dedicated Teachers, Inspiring Futures
          </h2>

          <p>
            EduNova's faculty consists of experienced,
            passionate and highly qualified educators
            committed to academic excellence and holistic
            student development.
          </p>

        </div>

      </section>

      {/* Leadership */}

      <section className="faculty-section light">

        <div className="faculty-container">

          <div className="faculty-title">

            <span className="faculty-badge">
              LEADERSHIP
            </span>

            <h2>
              School Leadership
            </h2>

          </div>

          <div className="leadership-grid">

            <div className="leader-card">

              <h3>Principal</h3>

              <p>
                Leads the institution with a vision for
                academic excellence and student success.
              </p>

            </div>

            <div className="leader-card">

              <h3>Vice Principal</h3>

              <p>
                Oversees curriculum implementation and
                day-to-day academic administration.
              </p>

            </div>

            <div className="leader-card">

              <h3>Academic Coordinator</h3>

              <p>
                Ensures quality teaching, assessments and
                continuous improvement.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Departments */}

      <section className="faculty-section">

        <div className="faculty-container">

          <div className="faculty-title">

            <span className="faculty-badge">
              DEPARTMENTS
            </span>

            <h2>
              Teaching Departments
            </h2>

          </div>

          <div className="department-grid">

            <div className="department-box">Mathematics</div>

            <div className="department-box">Science</div>

            <div className="department-box">Languages</div>

            <div className="department-box">Social Science</div>

            <div className="department-box">Computer Science</div>

            <div className="department-box">Arts & Physical Education</div>

          </div>

        </div>

      </section>

      {/* Philosophy */}

      <section className="faculty-section light">

        <div className="faculty-container">

          <div className="faculty-title">

            <span className="faculty-badge">
              OUR PHILOSOPHY
            </span>

            <h2>
              Learning Beyond Classrooms
            </h2>

          </div>

          <p className="faculty-text">
            Our teachers encourage curiosity,
            creativity, collaboration and critical
            thinking. Every lesson is designed to
            prepare students not only for examinations
            but also for life.
          </p>

        </div>

      </section>

    </>
  );
};

export default Faculty;