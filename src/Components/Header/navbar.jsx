import { Link } from "react-router-dom";
import strings from "../../assets/strings.webp"; // adjust path if needed

function Navbar() {
  return (
    <header className="navbar">
  <img src={strings} alt="Company Logo" className="logo" />
<div className="link">
<nav className="nav-center">
   <Link to="/">Home</Link>
    <Link to="/about">Services</Link>
    <Link to="/services">Products</Link>
    <Link to="/contact">Blog</Link>
    <Link to="/contact">Contact us</Link>
  </nav>
</div>
</header>
  );
}

export default Navbar;

