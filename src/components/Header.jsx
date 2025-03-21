// // Header.jsx
// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} `}>
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         <h1 className="text-2xl font-heading text-primary">
//           <span className="text-secondary font-bold">Adv.</span> Ashok Kumar
//         </h1>
//         <nav className="hidden md:flex space-x-8 text-sm uppercase font-semibold">
//           <a href="#about" className="relative text-gray-800 hover:text-secondary transition">
//             About
//             <span className="block h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//           </a>
//           <a href="#expertise" className="relative text-gray-800 hover:text-secondary transition">
//             Expertise
//           </a>
//           <a href="#experience" className="relative text-gray-800 hover:text-secondary transition">
//             Experience
//           </a>
//           <a href="#cases" className="relative text-gray-800 hover:text-secondary transition">
//             Cases
//           </a>
//           <a href="#contact" className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition">
//             Contact
//           </a>
//         </nav>
//         <div className="hidden md:block text-xs text-gray-600">AV-Rated • 24/7 Available</div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--dark-overlay)] shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-heading text-white">
          <span className="text-secondary font-bold">Adv.</span> Ashok Kumar
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase font-semibold">
          {['About', 'Expertise', 'Cases', 'Achievements', 'Testimonials', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-100 hover:text-secondary transition group"
            >
              {link}
              <span className="block h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--primary-color)] px-6 py-4 space-y-4 text-center">
          {['About', 'Expertise', 'Cases', 'Achievements', 'Testimonials', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-100 hover:text-secondary transition"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}

    </header>
  );
};

export default Header;
