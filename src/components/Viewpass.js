import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Viewpass = () => {
  const { web_id, user_id } = useParams();
  const [passwordData, setPasswordData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post("http://localhost/locify/view_details.php", {
          reg_id: user_id,
          wid: web_id
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        setPasswordData(response.data.website);
      } catch (error) {
        console.error("Error fetching password details:", error);
        setPasswordData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [web_id, user_id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!passwordData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-red-500">No data found or an error occurred.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          🔐 {passwordData.web_name}
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
