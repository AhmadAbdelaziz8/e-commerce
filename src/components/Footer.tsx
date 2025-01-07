import BrandIcon from "../assets/brand-icon.svg";
const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-900 text-white flex flex-col gap-4 p-10">
        <hr className="bg-white" />
        <div className="grid grid-cols-2">
          {/* left section */}
          <div>
            {/* Logo Container */}
            <div className="flex items-center">
              {/* Brand Icon */}
              <img src={BrandIcon} alt="Brand Icon" className="w-6 h-6 mr-2" />
              {/* Brand Name */}
              <span className="text-xl font-bold text-white">CandLeaf</span>
            </div>
            <p>
              Your natural candle made for <br /> your home and for your
              wellness.
            </p>
          </div>

          {/* right section */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-green-500">Column 1</h3>
              <p>Content for the first column.</p>
              <p>Content for the first column.</p>
              <p>Content for the first column.</p>
            </div>
            <div>
              <h3 className="text-green-500">Column 2</h3>
              <p>Content for the second column.</p>
              <p>Content for the first column.</p>
              <p>Content for the first column.</p>
            </div>
            <div>
              <h3 className="text-green-500">Column 3</h3>
              <p>Content for the third column.</p>
              <p>Content for the first column.</p>
              <p>Content for the first column.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
