import "./Academics.css";

import academicsBanner from "../assets/images/banners/academics-banner.jpg";

const Academics = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="page-banner"
        style={{
          backgroundImage: `url(${academicsBanner})`,
        }}
      >
        <div className="page-overlay">

          <h1>Academics</h1>

          <p>
            Home / Academics
          </p>

        </div>

      </section>

      {/* Overview */}

      <section className="page-section">

        <div className="container academic-intro">

          <span className="section-badge">
            ACADEMIC EXCELLENCE
          </span>

          <h2>
            Education That Inspires Success
          </h2>

          <p>
            At EduNova Public School, our academic program is
            designed to develop intellectual curiosity,
            creativity, leadership and lifelong learning.
            We combine strong academics with practical
            experiences to prepare students for the future.
          </p>

        </div>

      </section>

      {/* Academic Levels */}

<section className="page-section levels-section">

  <div className="container">

    <div className="section-title">

      <span className="section-badge">
        OUR PROGRAMS
      </span>

      <h2>
        Academic Levels
      </h2>

      <p>
        We provide a structured learning journey that supports
        every stage of a student's growth and development.
      </p>

    </div>

    <div className="levels-grid">

      <div className="level-card">

        <div className="level-icon">🎨</div>

        <h3>Pre Primary</h3>

        <h4>Nursery • LKG • UKG</h4>

        <p>
          A joyful beginning where children learn through
          play, creativity and exploration.
        </p>

      </div>

      <div className="level-card">

        <div className="level-icon">📖</div>

        <h3>Primary School</h3>

        <h4>Grade I – V</h4>

        <p>
          Strong academic foundations with equal emphasis on
          communication, values and confidence.
        </p>

      </div>

      <div className="level-card">

        <div className="level-icon">🧪</div>

        <h3>Middle School</h3>

        <h4>Grade VI – VIII</h4>

        <p>
          Encouraging analytical thinking, teamwork and
          practical learning across all subjects.
        </p>

      </div>

      <div className="level-card">

        <div className="level-icon">🎓</div>

        <h3>Senior Secondary</h3>

        <h4>Grade IX – XII</h4>

        <p>
          Focused academic preparation, career guidance and
          leadership development for higher education.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Departments */}

<section className="page-section">

  <div className="container">

    <div className="section-title">

      <span className="section-badge">
        DEPARTMENTS
      </span>

      <h2>
        Academic Departments
      </h2>

      <p>
        Every department is led by experienced educators
        committed to academic excellence and practical
        learning.
      </p>

    </div>

    <div className="department-grid">

      <div className="department-card">

        <div className="department-icon">
          📐
        </div>

        <h3>Mathematics</h3>

        <p>
          Developing logical thinking, analytical skills and
          problem-solving through interactive learning.
        </p>

      </div>

      <div className="department-card">

        <div className="department-icon">
          🧪
        </div>

        <h3>Science</h3>

        <p>
          Hands-on experiments and inquiry-based learning in
          Physics, Chemistry and Biology.
        </p>

      </div>

      <div className="department-card">

        <div className="department-icon">
          🌍
        </div>

        <h3>Social Science</h3>

        <p>
          Understanding history, geography, civics and
          economics through real-world perspectives.
        </p>

      </div>

      <div className="department-card">

        <div className="department-icon">
          💻
        </div>

        <h3>Computer Science</h3>

        <p>
          Programming, digital literacy and emerging
          technologies to prepare students for the future.
        </p>

      </div>

      <div className="department-card">

        <div className="department-icon">
          📚
        </div>

        <h3>Languages</h3>

        <p>
          Building communication skills through English,
          Hindi and regional language education.
        </p>

      </div>

      <div className="department-card">

        <div className="department-icon">
          🎨
        </div>

        <h3>Arts & Activities</h3>

        <p>
          Encouraging creativity through music, dance,
          painting, theatre and cultural programs.
        </p>

      </div>

    </div>

  </div>

</section>


    </>
  );
};

export default Academics;