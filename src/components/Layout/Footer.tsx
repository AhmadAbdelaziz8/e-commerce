import { Link } from "react-router-dom";
import BrandIcon from "/home/ahmad/repos/e-commerce/src/assets/brand-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <hr className="border-gray-700 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center group hover:opacity-90 transition-opacity"
            >
              <img src={BrandIcon} alt="" className="w-8 h-8 mr-3" />
              <span className="text-2xl font-bold text-white">CandLeaf</span>
            </Link>

            <div className="space-y-4 max-w-md">
              <p className="text-gray-300 text-lg">
                Your natural candle made for your home and for your wellness.
              </p>
              <p className="text-gray-400">
                © 2025 CandLeaf. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-3 gap-8">
            {/* Discovery */}
            <div className="space-y-4">
              <h3 className="text-[#56B280] font-bold text-lg">Discovery</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    to="/new-season"
                    className="hover:text-white transition-colors"
                  >
                    New Season
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bestsellers"
                    className="hover:text-white transition-colors"
                  >
                    Most Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections"
                    className="hover:text-white transition-colors"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sustainability"
                    className="hover:text-white transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h3 className="text-[#56B280] font-bold text-lg">About</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artisans"
                    className="hover:text-white transition-colors"
                  >
                    Artisans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ingredients"
                    className="hover:text-white transition-colors"
                  >
                    Ingredients
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    className="hover:text-white transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-[#56B280] font-bold text-lg">Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="hover:text-white transition-colors"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/returns"
                    className="hover:text-white transition-colors"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter - Optional */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-300">
              <h4 className="font-bold mb-2">Stay in the loop</h4>
              <p>
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#56B280] text-white"
                aria-label="Email subscription"
              />
              <button className="px-6 py-2 bg-[#56B280] text-white rounded-lg hover:bg-[#4a9c6f] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
