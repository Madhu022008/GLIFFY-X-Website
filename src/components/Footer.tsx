import { ArrowUpRight, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">GLIFFY<span>.X</span></Link>

          <p>
            Digital experiences, business software and intelligent solutions built with purpose.
          </p>

          {/* Social Icons */}
          <div className="footer-socials">

            {/* Message */}
            <a
              href="#"
              className="social-icon message-icon"
              aria-label="Message"
            >
              <MessageCircle size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="social-icon whatsapp-icon"
              aria-label="WhatsApp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.87 11.87 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43Z"
                  fill="currentColor"
                />
                <path
                  d="M17.47 14.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                  fill="white"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="social-icon instagram-icon"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div>
          <h4>Solutions</h4>
          <Link to="/solutions">Startups</Link>
          <Link to="/solutions">Retail</Link>
          <Link to="/solutions">Restaurants</Link>
          <Link to="/solutions">Small Businesses</Link>
        </div>

        <div>
          <h4>Start a project</h4>
          <p>Have an idea in mind?</p>
          <Link className="footer-link" to="/contact">
            Let's talk <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 GLIFFY.X. All rights reserved.</span>
        <span>Designed for modern businesses.</span>
      </div>
    </footer>
  );
}