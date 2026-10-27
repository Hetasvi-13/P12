import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import CurrentOrder from '../Pages/CurrentOrder';
import OrderHistory from '../Pages/OrderHistory';
import CancelledOrder from '../Pages/CancelledOrder';

function Orders() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
        E-commerce Order Management
      </h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <Link
          to="/orders/current"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
        >
          Current Orders
        </Link>

        <Link
          to="/orders/history"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-800"
        >
          Order History
        </Link>

        <Link
          to="/orders/cancelled"
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-800"
        >
          Cancelled Orders
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

function NavBar() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-700 p-4 text-center">
        <Link to="/orders/current" className="text-white font-bold text-xl">
          My Orders
        </Link>
      </nav>

      <Routes>
        <Route path="/orders" element={<Orders />}>
          <Route path="current" element={<CurrentOrder />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default NavBar;