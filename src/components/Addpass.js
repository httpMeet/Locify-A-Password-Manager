import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

const Addpass = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("user_id");
      const data = { webSiteName: websiteName, username, password, id };

      const response = await axios.post("http://localhost/locify/add_website.php", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Response:", response.data);

      if (response.data.status) {
        alert("Website Added Successfully");
        navigate("/home");
      } else {
        alert(response.data.message || "Error Try Again..");
      }
    } catch (e) {
      console.log("Error:", e);
      alert("Server Error. Check console for details.");
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`mt-8 p-8 rounded-2xl shadow-md w-full max-w-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Save New Password</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="website" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Website Name
            </label>
            <input
              type="text"
              id="web_name"
              name="web_name"
              value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)}
              placeholder="e.g. facebook.com"
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'}`}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Username / Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="your@email.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'}`}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'}`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addpass;