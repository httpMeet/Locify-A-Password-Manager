import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profilepass = () => {
  const [profilePassword, setProfilePassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = localStorage.getItem("user_id");
    const formData = {id,profilePassword}

    try {
      const response = await axios.post("http://localhost/locify/profile_password.php", formData);

      if (response.data.user) {
        navigate('/viewpass');
      } else {
        alert("Invalid Profile Password");
      }
    } catch (err) {
      console.error("Error verifying password", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Enter Profile Password</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="profile_password" className="block mb-2 text-sm font-medium text-gray-700">
              Profile Password
            </label>
            <input
              type="password"
              placeholder="Enter your profile password"
              id="profile_password"
              name="profile_password"
              value={profilePassword}
              onChange={(e) => setProfilePassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
