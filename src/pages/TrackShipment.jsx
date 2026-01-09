import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setShipment({
        trackingNumber,
        status: 'In Transit',
        location: 'New York Hub',
        estimatedDelivery: '2026-01-10',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Track Your Shipment</h1>
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </div>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border px-4 py-2 rounded flex-1"
          />
          <button onClick={handleTrack} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Track
          </button>
        </div>

        {shipment && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Shipment Details</h2>
            <div className="space-y-2">
              <p><strong>Tracking Number:</strong> {shipment.trackingNumber}</p>
              <p><strong>Status:</strong> <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{shipment.status}</span></p>
              <p><strong>Current Location:</strong> {shipment.location}</p>
              <p><strong>Estimated Delivery:</strong> {shipment.estimatedDelivery}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackShipment;
