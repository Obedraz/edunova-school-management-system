import "./Footer.css";
import { NavLink } from "react-router-dom";
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

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Faculty", path: "/faculty" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Achievements", path: "/achievements" },
  { name: "Memories", path: "/memories" },
  { name: "Contact", path: "/contact" },
];

const facilities = [
  "Smart Classrooms",
  "Library",
  "Science Labs",
  "Computer Lab",
  "Sports Complex",
  "Transport",
];

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* ================= School Info ================= */}

          <div className="footer-column">

            <h2 className="footer-logo">
              EduNova
            </h2>

            <p>
              EduNova Public School is committed to providing
              quality education through academic excellence,
              innovation, discipline and holistic development.
            </p>

            <div className="footer-social">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* ================= Quick Links ================= */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>

              {quickLinks.map((link) => (

                <li key={link.path}>

                  <NavLink to={link.path}>
                    {link.name}
                  </NavLink>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= Facilities ================= */}

          <div className="footer-column">

            <h3>Facilities</h3>

            <ul>

              {facilities.map((facility) => (

                <li key={facility}>
                  {facility}
                </li>

              ))}

            </ul>

          </div>

          {/* ================= Contact ================= */}

          <div className="footer-column">

            <h3>Contact</h3>

            <div className="footer-contact">

              <p>

                <FaMapMarkerAlt />

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bengaluru, Karnataka
                </a>

              </p>

              <p>

                <FaPhoneAlt />

                <a href="tel:+919876543210">
                  +91 9876543210
                </a>

              </p>

              <p>

                <FaEnvelope />

                <a href="mailto:info@edunova.edu.in">
                  info@edunova.edu.in
                </a>

              </p>

              <p>

                <FaClock />

                Mon - Sat : 8:30 AM - 4:30 PM

              </p>

            </div>

          </div>

        </div>

        {/* ================= Footer Bottom ================= */}

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