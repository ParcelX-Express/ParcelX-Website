import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    setShipments([
      { trackingNumber: 'PX123456', status: 'In Transit', destination: 'New York' },
      { trackingNumber: 'PX654321', status: 'Delivered', destination: 'London' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Your Shipments</h1>
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </div>
        <Link to="/track-shipment" className="bg-blue-600 text-white px-4 py-2 rounded mb-6 inline-block hover:bg-blue-700">
          Track a Shipment
        </Link>
        <table className="w-full border bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Tracking Number</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Destination</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{shipment.trackingNumber}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm ${
                    shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {shipment.status}
                  </span>
                </td>
                <td className="p-3">{shipment.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
