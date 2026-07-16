import "./TopBar.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <section className="topbar">

      <div className="container topbar-container">

        {/* Left */}

        <div className="topbar-left">

          <span className="admission-badge">
            Admissions Open 2026-27
          </span>

          <a href="tel:+919876543210">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </a>

          <a href="mailto:info@edunova.edu.in">
            <FaEnvelope />
            <span>info@edunova.edu.in</span>
          </a>

        </div>

        {/* Right */}

        <div className="topbar-right">

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

          <button className="login-btn">
            Teacher Login
          </button>

        </div>

      </div>

    </section>
  );
};

export default TopBar;