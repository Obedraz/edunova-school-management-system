import "./Gallery.css";

import gallery1 from "../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../assets/images/gallery/gallery6.jpg";

const galleryImages = [
  {
    image: gallery1,
    title: "Smart Classrooms",
  },
  {
    image: gallery2,
    title: "Science Laboratory",
  },
  {
    image: gallery3,
    title: "Sports Activities",
  },
  {
    image: gallery4,
    title: "Annual Day",
  },
  {
    image: gallery5,
    title: "Library",
  },
  {
    image: gallery6,
    title: "Campus Life",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">

      <div className="container">

        <div className="section-heading">

          <span className="section-badge">
            GALLERY
          </span>

          <h2>Life At EduNova</h2>

          <p>
            Discover moments that make our campus vibrant,
            inspiring and memorable.
          </p>

        </div>

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <div className="gallery-card" key={index}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <h3>{item.title}</h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;