import React from 'react';

const Viewpass = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">🔐 Facebook</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-medium">Username:</span> xyz
          </p>
          <p>
            <span className="font-medium">Password:</span> 123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Viewpass;
