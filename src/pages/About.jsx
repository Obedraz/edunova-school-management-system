import "./About.css";

import aboutBanner from "../assets/images/banners/about-banner.jpg";
import history from "../assets/images/about/history.jpg";

const About = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="page-banner"
        style={{
          backgroundImage: `url(${aboutBanner})`,
        }}
      >
        <div className="page-overlay">
          <h1>About EduNova</h1>
          <p>Home / About</p>
        </div>
      </section>

      {/* History */}

      <section className="page-section">

        <div className="container two-column">

          <div>

            <img
              src={history}
              alt="EduNova History"
              className="page-image"
            />

          </div>

          <div>

            <span className="section-badge">
              OUR HISTORY
            </span>

            <h2>
              A Legacy of Excellence
            </h2>

            <p>
              EduNova Public School was founded with the vision
              of providing world-class education that nurtures
              knowledge, discipline, creativity and leadership.
              Since its establishment, the school has remained
              committed to developing confident, responsible
              and compassionate individuals.
            </p>

            <p>
              Through innovative teaching practices, modern
              infrastructure and dedicated educators, EduNova
              continues to empower students with the skills
              needed to succeed in academics and life.
            </p>

          </div>

        </div>

      </section>

      {/* Vision & Mission */}

      <section className="vision-section">

        <div className="container vision-grid">

          <div className="vision-card">

            <h3>Our Vision</h3>

            <p>
              To become a leading educational institution
              that inspires excellence, innovation and
              lifelong learning while shaping responsible
              global citizens.
            </p>

          </div>

          <div className="vision-card">

            <h3>Our Mission</h3>

            <p>
              To provide holistic education through
              academic excellence, ethical values,
              leadership opportunities and continuous
              personal development.
            </p>

          </div>

        </div>

      </section>

    </>
  );
};
{/* Core Values */}

<section className="page-section values-section">

  <div className="container">

    <div className="section-title">

      <span className="section-badge">
        OUR VALUES
      </span>

      <h2>
        Values That Shape Every Student
      </h2>

      <p>
        At EduNova, we believe true education develops
        knowledge, character and leadership together.
      </p>

    </div>

    <div className="values-grid">

      <div className="value-card">

        <div className="value-icon">📘</div>

        <h3>Academic Excellence</h3>

        <p>
          Encouraging curiosity, innovation and a passion
          for lifelong learning.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">🤝</div>

        <h3>Integrity</h3>

        <p>
          Building honesty, responsibility and respect in
          every student.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">🌍</div>

        <h3>Leadership</h3>

        <p>
          Preparing future leaders with confidence,
          empathy and teamwork.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">💡</div>

        <h3>Innovation</h3>

        <p>
          Promoting creativity and problem-solving through
          modern education.
        </p>

      </div>

    </div>

  </div>

</section>
export default About;