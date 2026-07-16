import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
            src="https://placehold.co/60x60"
            alt="EduNova Logo"
            className="logo-image"
          />

          <div className="logo-text">
            <h2>EduNova Public School</h2>
            <p>Nurturing Minds, Building Futures</p>
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
                  isActive ? "active" : ""
                }
              >
                {item.name}
              </NavLink>

            </li>
          ))}

        </ul>

        {/* Search */}
        <div className="search-icon">
          <FaSearch />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;