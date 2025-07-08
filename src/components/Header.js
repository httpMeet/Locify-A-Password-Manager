import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-6 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold text-gray-800">Locify-Password Manager</span>
      </div>
      <nav>
        <Link to="/home" className="text-gray-700 hover:text-blue-600 text-lg font-medium">
          Home
        </Link>
        <Link to="/profilepass" className="ml-6 text-gray-700 hover:text-blue-600 text-lg font-medium">
          View Passwords
        </Link>
        <Link to="/login" className="ml-6 text-gray-700 hover:text-blue-600 text-lg font-medium">
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
