import "./Facilities.css";

import facilitiesBanner from "../assets/images/banners/facilities-banner.jpg";

const facilities = [
  {
    title: "Smart Classrooms",
    icon: "🖥️",
    description:
      "Interactive digital classrooms equipped with modern teaching technology.",
  },
  {
    title: "Science Laboratories",
    icon: "🧪",
    description:
      "Well-equipped Physics, Chemistry and Biology laboratories.",
  },
  {
    title: "Computer Lab",
    icon: "💻",
    description:
      "Modern computer laboratories with high-speed internet access.",
  },
  {
    title: "Library",
    icon: "📚",
    description:
      "A rich collection of books, journals and digital learning resources.",
  },
  {
    title: "Sports Complex",
    icon: "🏆",
    description:
      "Indoor and outdoor sports facilities promoting physical fitness.",
  },
  {
    title: "Transportation",
    icon: "🚌",
    description:
      "Safe and GPS-enabled transport covering multiple routes.",
  },
];

const Facilities = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="facilities-banner"
        style={{
          backgroundImage: `url(${facilitiesBanner})`,
        }}
      >
        <div className="facilities-overlay">

          <h1>Campus Facilities</h1>

          <p>Home / Facilities</p>

        </div>

      </section>

      {/* Overview */}

      <section className="facilities-section">

        <div className="facilities-container">

          <span className="facilities-badge">
            WORLD CLASS CAMPUS
          </span>

          <h2>
            Everything Students Need To Learn & Grow
          </h2>

          <p>
            EduNova provides a modern, safe and inspiring
            environment where students can achieve academic,
            creative and personal excellence.
          </p>

        </div>

      </section>

      {/* Facilities */}

      <section className="facilities-section light">

        <div className="facilities-container">

          <div className="facilities-title">

            <span className="facilities-badge">
              OUR FACILITIES
            </span>

            <h2>Campus Infrastructure</h2>

          </div>

          <div className="facilities-grid">

            {facilities.map((facility, index) => (

              <div
                className="facility-card"
                key={index}
              >

                <div className="facility-icon">
                  {facility.icon}
                </div>

                <h3>{facility.title}</h3>

                <p>{facility.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Safety */}

      <section className="facilities-section">

        <div className="facilities-container">

          <div className="facilities-title">

            <span className="facilities-badge">
              SAFETY FIRST
            </span>

            <h2>Student Safety & Security</h2>

          </div>

          <div className="safety-grid">

            <div className="safety-card">
              CCTV Surveillance
            </div>

            <div className="safety-card">
              GPS School Buses
            </div>

            <div className="safety-card">
              Medical Room
            </div>

            <div className="safety-card">
              Fire Safety Systems
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Facilities;