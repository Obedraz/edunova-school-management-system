import "./Achievements.css";

import achievementBanner from "../assets/images/banners/achievement-banner.jpg";

const Achievements = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="achievement-banner"
        style={{
          backgroundImage: `url(${achievementBanner})`,
        }}
      >
        <div className="achievement-overlay">

          <h1>Achievements</h1>

          <p>Home / Achievements</p>

        </div>

      </section>

      {/* Introduction */}

      <section className="achievement-section">

        <div className="achievement-container">

          <span className="achievement-badge">
            EXCELLENCE
          </span>

          <h2>
            Celebrating Success
          </h2>

          <p>
            At EduNova Public School, excellence is reflected
            in academics, sports, cultural activities and
            leadership. Every achievement represents the
            dedication of our students, teachers and parents.
          </p>

        </div>

      </section>

      {/* Achievement Categories */}

      <section className="achievement-section light">

        <div className="achievement-container">

          <div className="achievement-title">

            <span className="achievement-badge">
              HIGHLIGHTS
            </span>

            <h2>Our Achievements</h2>

          </div>

          <div className="achievement-grid">

            <div className="achievement-card">

              <div className="achievement-icon">🎓</div>

              <h3>Academic Excellence</h3>

              <p>
                Outstanding board examination results,
                merit ranks and academic competitions.
              </p>

            </div>

            <div className="achievement-card">

              <div className="achievement-icon">🏆</div>

              <h3>Sports</h3>

              <p>
                District, state and national level
                achievements across multiple sports.
              </p>

            </div>

            <div className="achievement-card">

              <div className="achievement-icon">🎭</div>

              <h3>Cultural Activities</h3>

              <p>
                Excellence in music, dance, theatre,
                debates and literary competitions.
              </p>

            </div>

            <div className="achievement-card">

              <div className="achievement-icon">🌟</div>

              <h3>Leadership</h3>

              <p>
                Students excelling in leadership,
                innovation, community service and clubs.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Awards */}

      <section className="achievement-section">

        <div className="achievement-container">

          <div className="achievement-title">

            <span className="achievement-badge">
              RECOGNITION
            </span>

            <h2>Awards & Recognition</h2>

          </div>

          <div className="awards-list">

            <div className="award-item">
              🥇 Best School Award – 2025
            </div>

            <div className="award-item">
              🏅 Excellence in Academic Performance
            </div>

            <div className="award-item">
              🏆 State Level Sports Championship
            </div>

            <div className="award-item">
              🌍 Excellence in Community Service
            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default Achievements;