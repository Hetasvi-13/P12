import React from 'react';

function CurrentOrder() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Current Order
      </h2>

      <div className="border p-4 rounded-lg">
        <p><b>Order ID:</b> #101</p>
        <p><b>Product:</b> Wireless Headphones</p>
        <p><b>Price:</b> ₹1,999</p>
        <p className="text-orange-500 font-semibold">
          Status: Out for Delivery
        </p>
      </div>

      <div className="border p-4 rounded-lg mt-4">
        <p><b>Order ID:</b> #102</p>
        <p><b>Product:</b> Smart Watch</p>
        <p><b>Price:</b> ₹2,499</p>
        <p className="text-blue-500 font-semibold">
          Status: Processing
        </p>
      </div>
    </div>
  );
}

export default CurrentOrder;