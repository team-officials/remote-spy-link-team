import React, { useState } from 'react';

function App() {
  const [trackingCode, setTrackingCode] = useState('');
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setTrackingCode(e.target.value);
  };

  const handleTrack = () => {
    // Simulate tracking logic
    setStatus(`Tracking item with code: ${trackingCode}. Status: In transit.`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Item Tracker</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter tracking code"
          value={trackingCode}
          onChange={handleInputChange}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleTrack}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Track
        </button>
        {status && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-lg text-gray-700">{status}</p>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
