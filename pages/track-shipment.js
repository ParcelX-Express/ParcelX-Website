import React, { useState } from 'react';

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);

  const handleTrack = () => {
    setShipment({
      trackingNumber,
      status: 'In Transit',
      location: 'New York Hub',
      estimatedDelivery: '2026-01-10',
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Track Your Shipment</h1>
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
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Tracking Number:</strong> {shipment.trackingNumber}</p>
          <p><strong>Status:</strong> {shipment.status}</p>
          <p><strong>Current Location:</strong> {shipment.location}</p>
          <p><strong>Estimated Delivery:</strong> {shipment.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
}
