import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isMoreActive = ["/solutions", "/work", "/process", "/pricing"].includes(location.pathname);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="/assets/logo.png"
            alt="GLIFFY.X Logo"
            className="logo-image"
          />
          <span className="logo-name">
            GLIFFY <b>X</b>
          </span>
        </Link>

        {/* Main Navigation */}
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>

          <Link
            to="/services"
            className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
          >
            Services
          </Link>

          {/* 3 Dot Menu */}
          <div
            ref={menuRef}
            className="more-menu"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              className={`dots-button ${isMoreActive ? "active" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="More navigation links"
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {menuOpen && (
              <div className="dropdown-menu" role="menu">
                <Link
                  to="/solutions"
                  className={`dropdown-item ${location.pathname === "/solutions" ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  role="menuitem"
                >
                  <span>✦</span>
                  Solutions
                </Link>

                <Link
                  to="/work"
                  className={`dropdown-item ${location.pathname === "/work" ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  role="menuitem"
                >
                  <span>◈</span>
                  Work
                </Link>

                <Link
                  to="/process"
                  className={`dropdown-item ${location.pathname === "/process" ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  role="menuitem"
                >
                  <span>⚡</span>
                  Process
                </Link>

                <Link
                  to="/pricing"
                  className={`dropdown-item ${location.pathname === "/pricing" ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  role="menuitem"
                >
                  <span>◇</span>
                  Pricing
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link to="/contact" className="get-started">
          Get Started
          <span>→</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;