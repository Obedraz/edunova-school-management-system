import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* School Info */}

          <div className="footer-column">

            <h2 className="footer-logo">
              EduNova
            </h2>

            <p>
              EduNova Public School is committed to academic
              excellence, character development and holistic
              education that prepares students for a successful
              future.
            </p>

            <div className="footer-social">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>

              <li>Home</li>

              <li>About</li>

              <li>Academics</li>

              <li>Admissions</li>

              <li>Gallery</li>

              <li>Contact</li>

            </ul>

          </div>

          {/* Facilities */}

          <div className="footer-column">

            <h3>Facilities</h3>

            <ul>

              <li>Smart Classrooms</li>

              <li>Library</li>

              <li>Science Labs</li>

              <li>Sports</li>

              <li>Transport</li>

              <li>Computer Lab</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-column">

            <h3>Contact</h3>

            <div className="footer-contact">

              <p>

                <FaMapMarkerAlt />

                Bengaluru, Karnataka

              </p>

              <p>

                <FaPhoneAlt />

                +91 9876543210

              </p>

              <p>

                <FaEnvelope />

                info@edunova.edu.in

              </p>

              <p>

                <FaClock />

                Mon - Sat : 8:30 AM - 4:30 PM

              </p>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 EduNova Public School. All Rights Reserved.
          </p>

          <span>
            Designed & Developed by EduNova Web Solutions
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;