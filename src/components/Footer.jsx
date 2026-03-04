import "./Footer.css";
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-col">
          <h3 className="footer-title">Pedgy Biotech Private Limited</h3>
          <p className="footer-desc">
            Purely Built on Trust. Delivering innovative, reliable, and
            high-quality probiotic solutions in nephrology with an unwavering
            commitment to patient well-being.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/pedgy-biotech/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/people/Flame-Of-Trust/61568212861078/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="mailto:info@pedgy.in"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Registered Office */}
        <div className="footer-col">
          <h4>Registered Office</h4>
          <p>
            Plot No 18/2, Sector III, Opp IKEA,<br />
            Huda Techno Enclave, Madhapur,<br />
            Hyderabad, Telangana – 500081
          </p>
          <p>
            📧 info@pedgy.in <br />
            📞 +91 94 94 786 247
          </p>
        </div>

        {/* Regional Office */}
        <div className="footer-col">
          <h4>Regional Office</h4>
          <p>
            First Floor, Plot No 9B, Autonagar,<br />
            Hayathnagar Mandal, Ranga Reddy,<br />
            Hyderabad, Telangana – 500070
          </p>
          <p>
            📧 info@pedgy.in <br />
            📞 +91 94 94 786 247
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Pedgy Biotech. All Rights Reserved.
      </div>
    </footer>
  );
}
