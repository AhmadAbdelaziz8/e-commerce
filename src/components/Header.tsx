import { Link } from "react-router-dom";
import BrandIcon from "../assets/brand-icon.svg";
import AccountIcon from "../assets/Profile.svg";
import CartIcon from "../assets/Cart.svg";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
] as const;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white shadow-sm">
      {/* Logo Container */}
      <Link
        to="/"
        className="flex items-center group hover:opacity-90 transition-opacity"
        aria-label="CandLeaf Home"
      >
        <img src={BrandIcon} alt="" className="w-6 h-6 mr-2" />
        <span className="text-xl font-bold text-[#56B280]">CandLeaf</span>
      </Link>

      {/* Navigation Bar */}
      <nav aria-label="Main navigation">
        <ul className="flex gap-12">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="font-bold hover:text-[#56B280] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#56B280] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Account and Cart Icons */}
      <div className="flex items-center gap-6">
        <Link
          to="/account"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Account"
        >
          <img src={AccountIcon} alt="" className="w-6 h-6" />
        </Link>

        <Link
          to="/cart"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
          aria-label="Shopping cart"
        >
          <img src={CartIcon} alt="" className="w-6 h-6" />
          {/* Optional: Add cart items count */}
          <span className="absolute -top-1 -right-1 bg-[#56B280] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
