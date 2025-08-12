import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => (
  <footer className="bg-[#06172E] text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4">Upper Ichon Management System</h4>
          <p className="text-sm text-gray-300">
            Serving the community with digital excellence since 2025.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="announcements" className="text-gray-300 hover:text-white transition-colors">Announcements</Link></li>
            <li><Link to="events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
            <li><Link to="spot-map" className="text-gray-300 hover:text-white transition-colors">Spot Map</Link></li> {/* Added Spot Map */}
           
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Info</h4>
          <p className="text-sm text-gray-300">
            📍 Upper Ichon, Iloilo City<br />
            📞 (033) 123-4567<br />
            ✉️ info@upperichon.gov.ph
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 Upper Ichon Management System. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;