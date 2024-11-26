import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import LP from "../../assets/LP.png";
import { ResponsivenavMenu } from "../../mockData/data";

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-30"
          />
          {/* Side Navigation */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-full bg-gray-50 z-50 shadow-xl"
          >
            {/* Header with Logo and Close Button */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-gray-200">
              <div className="flex items-center gap-2">
                <img
                  src={LP}
                  alt="Lugar Prime Logo"
                  className="w-12 h-12 object-contain"
                />
                <p className="text-xl font-bold">Lugar Prime</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="h-full pt-24 px-6">
              <ul className="flex flex-col gap-6">
                {/* Home */}
                <li>
                  <Link
                    to="/"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>

                {/* Dynamic Navigation Items */}
                {ResponsivenavMenu.map((menuItem) => (
                  <li key={menuItem.id}>
                    <div
                      onMouseEnter={() => setActiveDropdown(menuItem.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="relative"
                    >
                      <span className="text-lg font-semibold hover:text-blue-600 transition-colors cursor-pointer">
                        {menuItem.title}
                      </span>
                      <AnimatePresence>
                        {activeDropdown === menuItem.id && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="pl-4 mt-2 lg:border-l-2 lg:border-gray-200"
                          >
                            {menuItem.dropdown.map((dropdownItem, index) => (
                              <li key={index} className="py-2">
                                <Link
                                  to={dropdownItem.link}
                                  className="text-gray-900 hover:text-blue-600 transition-colors"
                                  onClick={handleLinkClick}
                                >
                                  {dropdownItem.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </li>
                ))}

                {/* About Us */}
                <li>
                  <Link
                    to="/about-us"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                </li>

                {/* Contact Us */}
                <li>
                  <Link
                    to="/contact-us"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
