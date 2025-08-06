import React, { useState } from 'react';
import { Calendar, FileText, Users, History, MapPin, Activity } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  const announcements = [
    { title: 'Barangay Clean-up Drive', date: 'April 20, 2025', priority: 'high' },
    { title: 'Health Seminar for Senior Citizens', date: 'April 25, 2025', priority: 'medium' },
    { title: 'Community Meeting Rescheduled', date: 'May 3, 2025', priority: 'low' },
  ];

  const events = [
    { title: 'Fiesta Celebration', date: 'May 1st', location: 'Barangay Plaza' },
    { title: 'Tree Planting Activity', date: 'June 5th', location: 'Riverside Park' },
    { title: 'Barangay Sports Day', date: 'July 15th', location: 'Sports Complex' },
  ];

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81]">{title}</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 transition-colors">
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
      

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Welcome to Upper Ichon
            </h2>
            <p className="text-xl md:text-2xl text-[#B3DEF8] font-medium drop-shadow">
              Your Digital Gateway to Community Services
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Announcements Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" id="announcements">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="text-[#0F4C81]" size={24} />
              <h3 className="text-xl font-bold text-[#0F4C81]">Latest Announcements</h3>
            </div>
            <div className="space-y-3">
              {announcements.map((a, i) => (
                <div key={i} className="border-l-4 border-[#58A1D3] pl-4 py-2">
                  <h4 className="font-semibold text-[#06172E] text-sm">{a.title}</h4>
                  <p className="text-xs text-gray-600">{a.date}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => openModal('announcements')}
              className="mt-4 w-full bg-[#58A1D3] text-white py-2 rounded-lg hover:bg-[#0F4C81] transition-colors duration-200"
            >
              View All Announcements
            </button>
          </div>

          {/* Events Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" id="events">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="text-[#0F4C81]" size={24} />
              <h3 className="text-xl font-bold text-[#0F4C81]">Upcoming Events</h3>
            </div>
            <div className="space-y-3">
              {events.map((e, i) => (
                <div key={i} className="border-l-4 border-[#B3DEF8] pl-4 py-2">
                  <h4 className="font-semibold text-[#06172E] text-sm">{e.title}</h4>
                  <p className="text-xs text-gray-600">{e.date} • {e.location}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => openModal('events')}
              className="mt-4 w-full bg-[#58A1D3] text-white py-2 rounded-lg hover:bg-[#0F4C81] transition-colors duration-200"
            >
              View All Events
            </button>
          </div>

          {/* Overview Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="text-[#0F4C81]" size={24} />
              <h3 className="text-xl font-bold text-[#0F4C81]">Barangay Overview</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Population:</span>
                <span className="font-semibold text-[#06172E]">50,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Established:</span>
                <span className="font-semibold text-[#06172E]">1950</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Area:</span>
                <span className="font-semibold text-[#06172E]">15.2 km²</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {[
                { name: 'History', icon: History },
                { name: 'Spot Map', icon: MapPin },
                { name: 'Projects', icon: Activity },
                { name: 'Officials', icon: Users },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => openModal(item.name.toLowerCase())}
                  className="flex items-center justify-center space-x-1 py-2 px-3 border border-[#B3DEF8] text-[#0F4C81] rounded-lg hover:bg-[#B3DEF8] transition-colors duration-200 text-sm"
                >
                  <item.icon size={14} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Request Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">Need a Certificate?</h3>
            <p className="text-gray-600 mb-6">Request official documents online with ease</p>
            <button
              onClick={() => openModal('request')}
              className="bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              Request Certificate
            </button>
          </div>
        </div>
      </main>

      

      {/* Modals */}
      {activeModal === 'announcements' && (
        <Modal title="All Announcements">
          <div className="space-y-4">
            {announcements.map((a, i) => (
              <div key={i} className="border-l-4 border-[#58A1D3] pl-6 py-4 bg-gray-50 rounded-r-lg">
                <h4 className="font-bold text-[#06172E] mb-2">{a.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{a.date}</p>
                <p className="text-sm text-gray-700">Further announcement details go here.</p>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {activeModal === 'events' && (
        <Modal title="All Events">
          <div className="space-y-4">
            {events.map((e, i) => (
              <div key={i} className="border-l-4 border-[#B3DEF8] pl-6 py-4 bg-gray-50 rounded-r-lg">
                <h4 className="font-bold text-[#06172E] mb-2">{e.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{e.date} • {e.location}</p>
                <p className="text-sm text-gray-700">More event details coming soon.</p>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {activeModal === 'request' && (
        <Modal title="Request Certificate">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]">
                  <option>Barangay Clearance</option>
                  <option>Certificate of Residency</option>
                  <option>Business Permit</option>
                  <option>Indigency Certificate</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]" rows="3" />
            </div>
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Submit Request
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
