import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from '../App';

const Home = () => {
  const [websites, setWebsites] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const reg_id = localStorage.getItem("user_id");
        const data = { reg_id };

        const response = await axios.post("http://localhost/locify/home.php", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setWebsites(response.data);
      } catch (err) {
        console.error("Error fetching websites:", err);
        setWebsites([]);
      }
    };

    fetchWebsites();
  }, []);

  return (
    <div className={`min-h-screen px-4 py-10 flex flex-col items-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h1 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        Saved Accounts
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {websites.length === 0 ? (
          <h1 className={`col-span-full text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            No websites saved yet.
          </h1>
        ) : (
          websites.map((site) => (
            <div
              key={site.web_id}
              className={`p-6 rounded-2xl shadow-md flex flex-col justify-between ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {site.web_name}
              </h2>
              <Link to={`/profilepass/${site.web_id}/${site.reg_id}`}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-xl font-semibold shadow-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;