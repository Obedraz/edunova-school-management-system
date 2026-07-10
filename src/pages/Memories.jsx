import "./Memories.css";
import { Link } from "react-router-dom";

import memoriesBanner from "../assets/images/banners/memories-banner.jpg";

const batches = [
  {
    year: "2025",
    title: "Batch of 2025",
    description: "A journey filled with achievements, friendships and unforgettable memories.",
  },
  {
    year: "2024",
    title: "Batch of 2024",
    description: "Celebrating excellence, leadership and lifelong friendships.",
  },
  {
    year: "2023",
    title: "Batch of 2023",
    description: "Remembering every smile, success and farewell moment.",
  },
  {
    year: "2022",
    title: "Batch of 2022",
    description: "An inspiring batch that left a lasting legacy.",
  },
  {
    year: "2021",
    title: "Batch of 2021",
    description: "Resilience, determination and unforgettable school life.",
  },
  {
    year: "2020",
    title: "Batch of 2020",
    description: "The beginning of countless success stories.",
  },
];

const Memories = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="memories-banner"
        style={{
          backgroundImage: `url(${memoriesBanner})`,
        }}
      >
        <div className="memories-overlay">

          <h1>School Memories</h1>

          <p>Home / Memories</p>

        </div>
      </section>

      {/* Introduction */}

      <section className="memories-section">

        <div className="memories-container">

          <span className="memories-badge">
            OUR BATCHES
          </span>

          <h2>
            Every Batch Has A Story
          </h2>

          <p>
            Every graduating class leaves behind unforgettable
            memories, friendships and achievements. Explore the
            special moments that define each batch of EduNova
            Public School.
          </p>

        </div>

      </section>

      {/* Batch Cards */}

      <section className="memories-section light">

        <div className="memories-container">

          <div className="batch-grid">

            {batches.map((batch) => (

              <div
                className="batch-card"
                key={batch.year}
              >

                <span className="batch-year">
                  {batch.year}
                </span>

                <h3>
                  {batch.title}
                </h3>

                <p>
                  {batch.description}
                </p>

                <Link
                  to={`/memories/${batch.year}`}
                  className="batch-btn"
                >
                  View Memories
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default Memories;