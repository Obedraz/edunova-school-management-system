import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/images/logo/edunova-logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Faculty", path: "/faculty" },
    { name: "Facilities", path: "/facilities" },
    { name: "Achievements", path: "/achievements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Memories", path: "/memories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo-section">
          <img
            src={logo}
            alt="EduNova Logo"
            className="logo-image"
          />

          <div className="logo-text">
            <h2>EduNova</h2>
            <p>Excellence in Education</p>
          </div>
        </NavLink>

        {/* Navigation */}
        <ul className="nav-links">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Button */}
        <button className="search-icon" aria-label="Search">
          <FaSearch />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;