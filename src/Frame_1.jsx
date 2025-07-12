// File: src/components/Frame_1.jsx

import React from 'react';
import './frame_1.css';

const Frame_1 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header / Logo Section */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/images/UIMS-logo.png"
            alt="Barangay Logo"
            className="h-12 w-auto"
          />
          <h1 className="text-xl font-bold text-gray-800">Upper Ichon Management System</h1>
        </div>

        <nav className="space-x-6 text-sm font-medium">
          <a href="#announcements" className="text-blue-600 hover:underline">Announcement</a>
          <a href="#events" className="text-blue-600 hover:underline">Events</a>
          <a href="#history" className="text-blue-600 hover:underline">History</a>
          <a href="#spot-map" className="text-blue-600 hover:underline">Spot Map</a>
          <a href="#project-activity" className="text-blue-600 hover:underline">Project Activity</a>
          <a href="#officials" className="text-blue-600 hover:underline">Officials</a>
          <a href="#request" className="text-blue-600 hover:underline">Request</a>
          <a href="#policies" className="text-blue-600 hover:underline">Policies</a>
          <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Login
          </button>
        </nav>
      </header>

      {/* Hero / Background Image Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/barangay-hall.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center px-4">
            Welcome to Upper Ichon Management System
          </h2>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Announcement & Events */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Latest Announcements</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Barangay Clean-up Drive on April 20, 2025</li>
            <li>Health Seminar for Senior Citizens</li>
            <li>Community Meeting Rescheduled to Friday</li>
          </ul>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Fiesta Celebration - May 1st</li>
            <li>Tree Planting Activity - June 5th</li>
            <li>Barangay Sports Day - July 15th</li>
          </ul>
        </section>

        {/* General Info Card */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">General Barangay Info</h3>
          <p className="text-sm text-gray-600">
            The barangay has a population of 50,000 residents. Established in 1950, it plays a vital role in local governance and community development.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <button className="border border-gray-300 py-1 px-2 rounded hover:bg-gray-100">
              <a href="#history">History</a>
            </button>
            <button className="border border-gray-300 py-1 px-2 rounded hover:bg-gray-100">
              <a href="#spot-map">Spot Map</a>
            </button>
            <button className="border border-gray-300 py-1 px-2 rounded hover:bg-gray-100">
              <a href="#project-activity">Project Activity</a>
            </button>
            <button className="border border-gray-300 py-1 px-2 rounded hover:bg-gray-100">
              <a href="#officials">Officials</a>
            </button>
            <button className="border border-gray-300 py-1 px-2 rounded hover:bg-gray-100">
              <a href="#policies">Policies</a>
            </button>
            <button className="border border-gray-300 py-1 px-2 rounded hover:bg-gray-100">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </section>

        {/* Request Certificate Button */}
        <section className="md:col-span-3 flex justify-center mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-semibold">
            Request Certificate
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; 2025 Upper Ichon Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Frame_1;