// import { motion, AnimatePresence } from "framer-motion";

// const ResponsiveMenu = ({ isOpen }) => {
//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
//         >
//           <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
//             <ul className="flex flex-col justify-center items-center gap-10">
//               <li>Home</li>
//               <li>About</li>
//               <li>Service</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ResponsiveMenu = ({ isOpen }) => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
//         >
//           <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
//             <ul className="flex flex-col justify-center items-center gap-7">
//               <li>Home</li>
//               <li>About</li>
//               <li onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-center">
//                 Service
//                 {/* Dropdown for Services */}
//                 {isServicesOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex flex-col items-center gap-4 mt-4"
//                   >
//                     <li className="text-sm">Web Development</li>
//                     <li className="text-sm">Mobile Development</li>
//                     <li className="text-sm">UI/UX Design</li>
//                   </motion.ul>
//                 )}
//               </li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  const [isSoftwareDevHovered, setIsSoftwareDevHovered] = useState(false); // Hover state for Software Development

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-white text-black py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-7">
              {/* Home Button */}
              <Link to="/" className="text-center cursor-pointer" onClick={handleLinkClick}>
                Home
              </Link>

              {/* Software Development with Hover Dropdown */}
              <li
                onMouseEnter={() => setIsSoftwareDevHovered(true)}
                onMouseLeave={() => setIsSoftwareDevHovered(false)}
                className="text-center cursor-pointer"
              >
                Software Development
                {isSoftwareDevHovered && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-4 mt-4"
                  >
                    <Link
                      to="/services/web-development"
                      className="text-sm cursor-pointer"
                      onClick={handleLinkClick}
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/services/mobile-development"
                      className="text-sm cursor-pointer"
                      onClick={handleLinkClick}
                    >
                      Mobile Development
                    </Link>
                    <Link
                      to="/services/ui-ux-development"
                      className="text-sm cursor-pointer"
                      onClick={handleLinkClick}
                    >
                      UI & UX Development
                    </Link>
                  </motion.ul>
                )}
              </li>

              {/* Business Consulting Button */}
              <Link to="/services/business-consulting" className="text-center cursor-pointer" onClick={handleLinkClick}>
                Business Consulting
              </Link>

              {/* Digital Marketing Button */}
              <Link to="/services/digital-marketing" className="text-center cursor-pointer" onClick={handleLinkClick}>
                Digital Marketing
              </Link>

              {/* About Us Button */}
              <Link to="/about-us" className="text-center cursor-pointer" onClick={handleLinkClick}>
                About Us
              </Link>

              {/* Contact Us Button */}
              <Link to="/contact-us" className="text-center cursor-pointer" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;

