import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-color)] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <p className="text-sm">&copy; 2025 Advocate Ashok Kumar. All rights reserved.</p>

        <div className="flex justify-center flex-wrap gap-4 text-sm font-light tracking-wide">
          <a href="#" className="hover:text-secondary transition">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-secondary transition">Terms & Conditions</a>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">Bar Membership #123456</span>
        </div>

        <div className="flex justify-center gap-4 text-xs text-gray-400">
          <span>SSL Secured</span>
          <span>•</span>
          <span>GDPR Compliant</span>
        </div>

        {/* Social Media Icons
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
            <i className="fab fa-linkedin-in text-lg"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557533192790" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a href="https://www.instagram.com/sirsiashokkumar?igsh=cDN1cGYyZTR1a2ty" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
            <i className="fab fa-instagram text-lg"></i>
          </a>
        </div> */}

        {/* Developer Credit */}
        <div className="text-center text-xs text-gray-500 mt-6">
          Designed & Developed by <a href="https://portfolio-git-main-somil1608s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
            Somil</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
