import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Company Info */}
        <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "10px" }}>My Company</h2>
          <p>
            We provide modern web solutions and app development services to
            businesses worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Contact</h3>
          <p>Email: info@mycompany.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, City</p>
        </div>
      </div>

      <hr style={{ borderColor: "#444", margin: "20px 0" }} />

      {/* Copyright */}
      <p style={{ textAlign: "center", fontSize: "14px", margin: 0 }}>
        © 2026 My Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
