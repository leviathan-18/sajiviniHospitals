import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { aboutSubMenu } from "../../aboutUs/aboutData";
import { primaryMenu } from "../navigation/menuData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="logo-wrap" onClick={closeAllMenus}>
          <span className="logo-mark">S</span>
          <span className="logo-text">
            <strong>SANJIVINI</strong>
            <small>Super Speciality Hospital</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {primaryMenu.slice(0, 1).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
              onClick={closeAllMenus}
            >
              {item.label}
            </NavLink>
          ))}

          <div
            className="nav-dropdown"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => setAboutOpen((prev) => !prev)}
              type="button"
            >
              About Us
            </button>
            <div className={`dropdown-panel ${aboutOpen ? "is-open" : ""}`}>
              {aboutSubMenu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="dropdown-item"
                  onClick={closeAllMenus}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {primaryMenu.slice(1).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
              onClick={closeAllMenus}
            >
              {item.label}
            </NavLink>
          ))}

          <button className="cta-btn">Request Callback</button>
        </nav>
      </div>
    </header>
  );
}
