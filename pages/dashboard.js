import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    // TODO: Fetch shipments from backend
    setShipments([
      { trackingNumber: 'PX123456', status: 'In Transit', destination: 'New York' },
      { trackingNumber: 'PX654321', status: 'Delivered', destination: 'London' },
    ]);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Shipments</h1>
      <Link to="/track-shipment" className="bg-blue-600 text-white px-4 py-2 rounded mb-6 inline-block hover:bg-blue-700">
        Track a Shipment
      </Link>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Tracking Number</th>
            <th className="p-2">Status</th>
            <th className="p-2">Destination</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment, index) => (
            <tr key={index} className="text-center border-t">
              <td className="p-2">{shipment.trackingNumber}</td>
              <td className="p-2">{shipment.status}</td>
              <td className="p-2">{shipment.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
