import React from 'react';

const Addpass = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">

      <div className="bg-white mt-8 p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Save New Password</h2>
        <form className="space-y-6" method='POST' action=''>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              Website Name
            </label>
            <input
              type="text"
              id="website"
              name="website"
              placeholder="e.g. facebook.com"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username / Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="your@email.com"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200 cursor-pointer"
            onClick={() => alert('Password saved successfully!')}
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addpass;
