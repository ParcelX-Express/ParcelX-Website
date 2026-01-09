import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    setShipments([
      { trackingNumber: 'PX123456', status: 'In Transit', destination: 'New York' },
      { trackingNumber: 'PX654321', status: 'Delivered', destination: 'London' },
    ]);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Shipments</h1>
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
}
