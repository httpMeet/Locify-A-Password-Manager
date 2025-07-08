import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-7">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-sm text-gray-600 text-center">
        <p>&copy; {new Date().getFullYear()} Locify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
