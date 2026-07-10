import "./Gallery.css";

import galleryBanner from "../assets/images/banners/gallery-banner.jpg";

import gallery1 from "../assets/images/gallery/gallery1.jpg";
import gallery2 from "../assets/images/gallery/gallery2.jpg";
import gallery3 from "../assets/images/gallery/gallery3.jpg";
import gallery4 from "../assets/images/gallery/gallery4.jpg";
import gallery5 from "../assets/images/gallery/gallery5.jpg";
import gallery6 from "../assets/images/gallery/gallery6.jpg";

const galleryImages = [
  {
    image: gallery1,
    title: "Annual Day",
    category: "Events",
  },
  {
    image: gallery2,
    title: "Science Lab",
    category: "Campus",
  },
  {
    image: gallery3,
    title: "Sports Meet",
    category: "Sports",
  },
  {
    image: gallery4,
    title: "Library",
    category: "Campus",
  },
  {
    image: gallery5,
    title: "Classroom",
    category: "Academics",
  },
  {
    image: gallery6,
    title: "Art Exhibition",
    category: "Events",
  },
];

const Gallery = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="gallery-banner"
        style={{
          backgroundImage: `url(${galleryBanner})`,
        }}
      >
        <div className="gallery-overlay">

          <h1>Gallery</h1>

          <p>Home / Gallery</p>

        </div>

      </section>

      {/* Intro */}

      <section className="gallery-section">

        <div className="gallery-container">

          <span className="gallery-badge">
            SCHOOL GALLERY
          </span>

          <h2>
            Capturing Beautiful Moments
          </h2>

          <p>
            Explore memorable moments from academics,
            sports, celebrations and campus life at
            EduNova Public School.
          </p>

        </div>

      </section>

      {/* Categories */}

      <section className="gallery-section light">

        <div className="gallery-container">

          <div className="gallery-filter">

            <button>All</button>
            <button>Campus</button>
            <button>Academics</button>
            <button>Sports</button>
            <button>Events</button>

          </div>

          <div className="gallery-grid">

            {galleryImages.map((item, index) => (

              <div
                className="gallery-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-card-overlay">

                  <h3>{item.title}</h3>

                  <span>{item.category}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Videos */}

      <section className="gallery-section">

        <div className="gallery-container">

          <div className="gallery-title">

            <span className="gallery-badge">
              VIDEOS
            </span>

            <h2>
              Campus Videos
            </h2>

          </div>

          <div className="video-grid">

            <div className="video-card">
              School Campus Tour
            </div>

            <div className="video-card">
              Annual Day Highlights
            </div>

            <div className="video-card">
              Sports Meet
            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default Gallery;