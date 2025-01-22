import { Link } from "react-router-dom";
import { useState } from "react";
import BrandIcon from "../../assets/brand-icon.svg";
import AccountIcon from "../../assets/Profile.svg";
import CartIcon from "../../assets/Cart.svg";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Container */}
          <Link
            to="/"
            className="flex items-center group hover:opacity-90 transition-opacity"
            aria-label="CandLeaf Home"
          >
            <img
              src={BrandIcon}
              alt=""
              className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
            />
            <span className="text-lg sm:text-xl font-bold text-[#56B280]">
              CandLeaf
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex space-x-8 lg:space-x-12">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="font-bold text-gray-700 hover:text-[#56B280] transition-colors relative py-2
                             after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                             after:bg-[#56B280] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Account and Cart Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Account */}
            <Link
              to="/login-page"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Account"
            >
              <img src={AccountIcon} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              aria-label="Shopping cart"
            >
              <img src={CartIcon} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="absolute -top-1 -right-1 bg-[#56B280] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg md:hidden hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-gray-100"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-4">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#56B280] transition-colors rounded-lg font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
