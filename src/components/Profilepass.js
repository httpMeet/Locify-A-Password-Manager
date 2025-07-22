import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ThemeContext } from '../App';

const Profilepass = () => {
  const [profilePassword, setProfilePassword] = useState('');
  const navigate = useNavigate();
  const { web_id, user_id } = useParams();
  const { theme } = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: user_id,
      profilePassword
    };

    try {
      const response = await axios.post("http://localhost/locify/profile_password.php", formData);

      if (response.data.user) {
        navigate(`/viewpass/${web_id}/${user_id}`);
      } else {
        alert("Invalid Profile Password");
      }
    } catch (err) {
      console.error("Error verifying password", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`p-8 rounded-2xl shadow-md w-full max-w-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Enter Profile Password</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="profile_password" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Profile Password
            </label>
            <input
              type="password"
              placeholder="Enter your profile password"
              id="profile_password"
              name="profile_password"
              value={profilePassword}
              onChange={(e) => setProfilePassword(e.target.value)}
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500'}`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profilepass;