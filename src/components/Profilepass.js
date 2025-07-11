import React from 'react';
import { Link } from 'react-router-dom';

const Profilepass = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Enter Profile Password</h2>
        <form className="space-y-4" method='POST' action=''>
          <div>
            <label htmlFor="ProfilePassword" className="block mb-2 text-sm font-medium text-gray-700">
              Profile Password
            </label>
            <input
              type="password"
              placeholder="Enter your profile password"
              id="profile_password"
              name="profile_password"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Link to='/viewpass'>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Submit
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Profilepass;
