import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-appSurfaceMuted text-appMuted py-8 mt-16 shadow-inner border-t border-appBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} StellarStore. All rights reserved.
        </p>
        <nav className="space-x-4">
          <a href="#" className="hover:text-appText transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-appText transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-appText transition-colors duration-200">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
