import React from "react";
import { Link } from "react-router-dom";

const websites = [
  { id: 1, name: "Facebook" },
  { id: 2, name: "Instagram" },
  { id: 3, name: "Twitter" },
  { id: 4, name: "Gmail" },
  { id: 5, name: "LinkedIn" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Saved Accounts
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {websites.map((site) => (
          <div
            key={site.id}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {site.name}
            </h2>
            <Link to="/profilepass">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-xl font-semibold shadow-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
