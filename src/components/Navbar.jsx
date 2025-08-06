// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  MapPin, Calendar, Users, FileText, Phone, Award, History, Activity
} from 'lucide-react';

const navItems = [
  { name: 'Announcements', to: 'announcements', icon: FileText },
  { name: 'Events', to: 'events', icon: Calendar },
  { name: 'Spot Map', to: 'spotmap', icon: MapPin },
  { name: 'ProjectActivity', to: 'projectactivity', icon: Activity },
  { name: 'Officials', to: 'officials', icon: Users },
  { name: 'Requests', to: 'request', icon: Award },
  
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0F4C81] to-[#58A1D3]">
              <img src="/images/UIMS-logo.png" alt="Upper Ichon Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0F4C81]">Upper Ichon</h1>
              <p className="text-sm text-[#58A1D3]">Management System</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a key={item.name} href={item.to} className="px-4 py-2 text-sm font-medium text-[#0F4C81] hover:bg-[#B3DEF8] rounded-lg transition-colors duration-200 flex items-center space-x-1">
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            ))}
            <button className="bg-[#06172E] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 ml-4">
              Login
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-[#0F4C81] hover:bg-[#B3DEF8] rounded-lg transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className="block px-4 py-3 text-sm font-medium text-[#0F4C81] hover:bg-[#B3DEF8] rounded-lg transition-colors flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            ))}
            <button className="w-full bg-[#06172E] text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors mt-2">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
