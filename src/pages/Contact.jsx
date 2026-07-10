import "./Contact.css";

import contactBanner from "../assets/images/banners/contact-banner.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Banner */}

      <section
        className="contact-banner"
        style={{
          backgroundImage: `url(${contactBanner})`,
        }}
      >
        <div className="contact-overlay">

          <h1>Contact Us</h1>

          <p>Home / Contact</p>

        </div>

      </section>

      {/* Contact */}

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-info">

            <span className="contact-badge">
              GET IN TOUCH
            </span>

            <h2>
              We'd Love To Hear From You
            </h2>

            <p>
              Whether you have questions about admissions,
              academics or campus facilities, our team is
              always ready to help.
            </p>

            <div className="info-box">

              <FaMapMarkerAlt />

              <div>

                <h3>Address</h3>

                <p>
                  EduNova Public School,
                  Bengaluru, Karnataka
                </p>

              </div>

            </div>

            <div className="info-box">

              <FaPhoneAlt />

              <div>

                <h3>Phone</h3>

                <p>
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="info-box">

              <FaEnvelope />

              <div>

                <h3>Email</h3>

                <p>
                  info@edunova.edu
                </p>

              </div>

            </div>

            <div className="info-box">

              <FaClock />

              <div>

                <h3>Office Hours</h3>

                <p>
                  Monday - Saturday
                  <br />
                  8:00 AM - 4:30 PM
                </p>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="contact-form">

            <h2>Send a Message</h2>

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Map */}

      <section className="map-section">

        <iframe
          title="School Location"
          src="https://www.google.com/maps?q=Bengaluru&output=embed"
          loading="lazy"
        ></iframe>

      </section>

    </>
  );
};

export default Contact;