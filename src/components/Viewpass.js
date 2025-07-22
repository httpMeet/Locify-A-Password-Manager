import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from '../App';

const Viewpass = () => {
  const { web_id, user_id } = useParams();
  const [passwordData, setPasswordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copyStatus, setCopyStatus] = useState("idle");
  const [actionLoading, setActionLoading] = useState(false);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post(
          "http://localhost/locify/view_details.php",
          {
            reg_id: user_id,
            wid: web_id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

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

  const handleCopy = () => {
    setCopyStatus("loading");
    navigator.clipboard.writeText(passwordData.password);

    setTimeout(() => {
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }, 1000);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this password?"))
      return;

    setActionLoading(true);
    try {
      const response = await axios.post(
        "http://localhost/locify/delete_password.php",
        {
          web_id,
          reg_id: user_id,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        alert("Password deleted successfully.");
        navigate("/home");
      } else {
        alert("Failed to delete password.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error while deleting.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdate = async () => {
    const newPassword = prompt("Enter new password:");
    if (!newPassword) return;

    setActionLoading(true);
    try {
      const response = await axios.post(
        "http://localhost/locify/update_password.php",
        {
          web_id,
          reg_id: user_id,
          new_password: newPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        alert("Password updated successfully.");
        setPasswordData({ ...passwordData, password: newPassword });
      } else {
        alert("Failed to update password.");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Error while updating.");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading...</p>
      </div>
    );
  }

  if (!passwordData) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <p className="text-lg text-red-500">
          No data found or an error occurred.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center min-h-screen px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`p-8 rounded-2xl shadow-xl w-full max-w-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center dark:text-blue-500">
          🔐 {passwordData.web_name}
        </h2>

        <div className={`space-y-4 mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
          <div className="flex justify-between">
            <span className="font-semibold">Username / Email:</span>
            <span>{passwordData.username}</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold">Password:</span>
              <span className="ml-2 font-mono tracking-wide">
                {passwordData.password}
              </span>
            </div>

            <button
              onClick={handleCopy}
              disabled={copyStatus === "loading"}
              className={`ml-4 px-3 py-1 text-sm rounded transition duration-300 cursor-pointer flex items-center gap-2
                ${
                  copyStatus === "copied"
                    ? "bg-green-500 text-white"
                    : theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              title="Copy to clipboard"
            >
              {copyStatus === "loading" && (
                <svg
                  className="animate-spin h-4 w-4 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  ></path>
                </svg>
              )}

              {copyStatus === "copied"
                ? "✅ Copied"
                : copyStatus === "loading"
                ? "Copying..."
                : "📋 Copy"}
            </button>
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <button
            onClick={handleUpdate}
            disabled={actionLoading}
            className="flex-1 bg-yellow-400 text-white py-2 rounded-xl hover:bg-yellow-500 transition duration-200"
          >
            📝 Update
          </button>
          <button
            onClick={handleDelete}
            disabled={actionLoading}
            className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition duration-200"
          >
            🗑️ Delete
          </button>
        </div>

        <div className="mb-4">
          <Link to="/home">
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200">
              ⬅ Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Viewpass;