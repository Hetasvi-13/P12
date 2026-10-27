import React from 'react';

function OrderHistory() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Order History
      </h2>

      <div className="border p-4 rounded-lg">
        <p><b>Order ID:</b> #090</p>
        <p><b>Product:</b> Bluetooth Speaker</p>
        <p><b>Price:</b> ₹1,499</p>
        <p className="text-green-600 font-semibold">
          Status: Delivered
        </p>
      </div>

      <div className="border p-4 rounded-lg mt-4">
        <p><b>Order ID:</b> #095</p>
        <p><b>Product:</b> Laptop Bag</p>
        <p><b>Price:</b> ₹899</p>
        <p className="text-green-600 font-semibold">
          Status: Delivered
        </p>
      </div>
    </div>
  );
}

export default OrderHistory;