import React from 'react';

function CancelledOrders() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Cancelled Orders
      </h2>

      <div className="border p-4 rounded-lg">
        <p><b>Order ID:</b> #080</p>
        <p><b>Product:</b> Gaming Mouse</p>
        <p><b>Price:</b> ₹799</p>
        <p className="text-red-600 font-semibold">
          Status: Cancelled
        </p>
      </div>

      <div className="border p-4 rounded-lg mt-4">
        <p><b>Order ID:</b> #085</p>
        <p><b>Product:</b> USB Keyboard</p>
        <p><b>Price:</b> ₹999</p>
        <p className="text-red-600 font-semibold">
          Status: Cancelled
        </p>
      </div>
    </div>
  );
}

export default CancelledOrders;