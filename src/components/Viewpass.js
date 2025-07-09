import React from 'react';
import { Link } from 'react-router-dom';

const Viewpass = () => {
  // In future, you can fetch real data via props, context, or API
  const passwordData = {
    website: 'Facebook',
    username: 'Meet Gandhi',
    password: '123@',
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          🔐 {passwordData.website}
        </h2>

        <div className="space-y-4 text-gray-800 mb-6">
          <div className="flex justify-between">
            <span className="font-semibold">Username / Email:</span>
            <span>{passwordData.username}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Password:</span>
            <span className="font-mono tracking-wide">{passwordData.password}</span>
          </div>
        </div>

        <Link to="/home">
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200">
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Viewpass;
