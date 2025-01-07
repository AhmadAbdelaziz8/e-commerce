import { Link } from "react-router-dom";
import BrandIcon from "../assets/brand-icon.svg"; // Import SVG as a React component
import AccountIcon from "../assets/Profile.svg"; // Import SVG as a React component
import CartIcon from "../assets/Cart.svg"; // Import SVG as a React component

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Container */}
      <div className="flex items-center">
        {/* Brand Icon */}
        <img src={BrandIcon} alt="Brand Icon" className="w-6 h-6 mr-2" />

        {/* Brand Name */}
        <span
          className="text-xl font-bold"
          style={{ color: "rgba(86, 178, 128, 1)" }}
        >
          CandLeaf
        </span>
      </div>

      {/* Navigation Bar */}
      <nav>
        <ul className="flex gap-12 font-bold">
          <li>
            <Link to="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-green-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Account and Cart Icons */}
      <div className="flex items-center gap-6">
        {/* Account Icon */}
        <Link to="/account">
          <img
            src={AccountIcon}
            alt="Account Icon"
            className="w-6 h-6 hover:text-green-600 transition-colors"
          />
        </Link>

        {/* Cart Icon */}
        <Link to="/cart">
          <img
            src={CartIcon}
            alt="Cart Icon"
            className="w-6 h-6 hover:text-green-600 transition-colors p-2"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
