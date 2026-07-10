import { useEffect, useState } from "react";
import "./HeroSlider.css";
import heroData from "./HeroData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroData.length - 1 : prev - 1
    );
  };

  const slide = heroData[currentSlide];

  return (
    <section className="hero">

      {/* Background Images */}

      {heroData.map((item, index) => (
        <div
          key={item.id}
          className={`hero-slide ${
            currentSlide === index ? "active-slide" : ""
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
      ))}

      {/* Overlay */}

      <div className="hero-overlay">

        {/* Left Arrow */}

        <button
          className="hero-arrow left"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        {/* Hero Content */}

        <div className="hero-container">

          <div className="hero-content">

            <span className="hero-tag">
              Welcome To EduNova
            </span>

            <h1>{slide.title}</h1>

            <h2>{slide.subtitle}</h2>

            <p>{slide.description}</p>

            <div className="hero-buttons">

              <button className="primary-btn">
                {slide.button}
              </button>

              <button className="secondary-btn">
                Explore Campus
              </button>

            </div>

          </div>

          {/* Announcement Card */}

          <div className="announcement-card">

            <div className="announcement-header">
              📢 Latest Announcement
            </div>

            <div className="announcement-body">

              <span className="announcement-badge">
                Admissions 2026-27
              </span>

              <h2>
                Admissions
                <br />
                Open Now
              </h2>

              <p>
                Nursery to Grade XII admissions are now
                open. Limited seats available.
              </p>

              <button>
                Apply Today
              </button>

            </div>

          </div>

        </div>

        {/* Right Arrow */}

        <button
          className="hero-arrow right"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

        {/* Dots */}

        <div className="slider-dots">

          {heroData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={
                currentSlide === index
                  ? "dot active-dot"
                  : "dot"
              }
            ></span>
          ))}

        </div>

        {/* Scroll Indicator */}

        <div className="scroll-indicator">

          <span>Scroll</span>

          <div className="mouse">

            <div className="wheel"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSlider;