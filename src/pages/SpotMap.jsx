// src/pages/SpotMap.jsx
import React, { useState } from 'react';
import { Menu, X, MapPin, Calendar, Users, FileText, Phone, Award, History, Activity, Filter, Search, Navigation, Building, Hospital, GraduationCap, ShoppingCart, Car, TreePine, Home, Zap } from 'lucide-react';
// import { Link } from 'react-router-dom'; // No need to import Link here if this is a standalone page

const SpotMap = () => { // Renamed from SpotMapPage
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpot, setSelectedSpot] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  // navItems are typically handled by Navbar, but kept here for context if this component were standalone
  // For integration with PublicLayout, Navbar handles navigation.
  const navItems = [
    { name: 'Announcements', href: '#announcements', icon: FileText },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'History', href: '#history', icon: History },
    { name: 'Spot Map', href: '#spot-map', icon: MapPin },
    { name: 'Project Activity', href: '#project-activity', icon: Activity },
    { name: 'Officials', href: '#officials', icon: Users },
    { name: 'Request', href: '#request', icon: Award },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  const categories = [
    { id: 'all', name: 'All Locations', icon: MapPin, color: '#0F4C81' },
    { id: 'government', name: 'Government', icon: Building, color: '#58A1D3' },
    { id: 'health', name: 'Health', icon: Hospital, color: '#10B981' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: '#F59E0B' },
    { id: 'commercial', name: 'Commercial', icon: ShoppingCart, color: '#EF4444' },
    { id: 'transport', name: 'Transport', icon: Car, color: '#8B5CF6' },
    { id: 'recreation', name: 'Recreation', icon: TreePine, color: '#06B6D4' },
    { id: 'residential', name: 'Residential', icon: Home, color: '#84CC16' },
    { id: 'utilities', name: 'Utilities', icon: Zap, color: '#F97316' },
  ];

  const spots = [
    {
      id: 1,
      name: 'Upper Ichon Barangay Hall',
      category: 'government',
      coordinates: { x: 45, y: 30 },
      address: '123 Main Street, Upper Ichon',
      description: 'Main administrative building for all barangay services and transactions.',
      services: ['Certificate Requests', 'Permits', 'Complaints', 'Records'],
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      contact: '(033) 123-4567'
    },
    {
      id: 2,
      name: 'Upper Ichon Health Center',
      category: 'health',
      coordinates: { x: 65, y: 45 },
      address: '456 Health Ave, Upper Ichon',
      description: 'Primary healthcare facility serving the community with medical services.',
      services: ['General Consultation', 'Vaccination', 'Maternal Care', 'Emergency Services'],
      hours: '24/7 Emergency, Mon-Sat: 7:00 AM - 7:00 PM',
      contact: '(033) 123-4568'
    },
    {
      id: 3,
      name: 'Upper Ichon Elementary School',
      category: 'education',
      coordinates: { x: 30, y: 60 },
      address: '789 Education Blvd, Upper Ichon',
      description: 'Public elementary school providing quality basic education.',
      services: ['Kindergarten', 'Grades 1-6', 'Special Programs', 'After School Care'],
      hours: 'Mon-Fri: 7:00 AM - 5:00 PM',
      contact: '(033) 123-4569'
    },
    {
      id: 4,
      name: 'Upper Ichon High School',
      category: 'education',
      coordinates: { x: 25, y: 65 },
      address: '101 Scholar St, Upper Ichon',
      description: 'Public high school offering comprehensive secondary education.',
      services: ['Grades 7-12', 'STEM Program', 'Arts Program', 'Sports Program'],
      hours: 'Mon-Fri: 7:00 AM - 6:00 PM',
      contact: '(033) 123-4570'
    },
    {
      id: 5,
      name: 'Central Market',
      category: 'commercial',
      coordinates: { x: 55, y: 25 },
      address: '202 Market Road, Upper Ichon',
      description: 'Main marketplace for fresh produce, goods, and local products.',
      services: ['Fresh Produce', 'Meat & Seafood', 'Dry Goods', 'Local Crafts'],
      hours: 'Daily: 5:00 AM - 7:00 PM',
      contact: '(033) 123-4571'
    },
    {
      id: 6,
      name: 'Upper Ichon Plaza',
      category: 'recreation',
      coordinates: { x: 50, y: 40 },
      address: 'Central Plaza, Upper Ichon',
      description: 'Community gathering place for events, festivals, and recreation.',
      services: ['Events Venue', 'Children\'s Playground', 'Walking Paths', 'Food Stalls'],
      hours: '24/7 Public Access',
      contact: 'N/A'
    },
    {
      id: 7,
      name: 'Bus Terminal',
      category: 'transport',
      coordinates: { x: 75, y: 20 },
      address: '303 Transport Hub, Upper Ichon',
      description: 'Main transportation hub connecting to various destinations.',
      services: ['City Buses', 'Provincial Buses', 'Jeepneys', 'Tricycles'],
      hours: '24/7 Operations',
      contact: '(033) 123-4572'
    },
    {
      id: 8,
      name: 'Riverside Park',
      category: 'recreation',
      coordinates: { x: 20, y: 80 },
      address: 'Riverside Drive, Upper Ichon',
      description: 'Scenic park along the river perfect for family outings and relaxation.',
      services: ['Picnic Areas', 'Jogging Trails', 'Fishing Spots', 'Boat Rentals'],
      hours: '6:00 AM - 6:00 PM',
      contact: 'N/A'
    },
    {
      id: 9,
      name: 'Police Outpost',
      category: 'government',
      coordinates: { x: 70, y: 35 },
      address: '404 Safety Street, Upper Ichon',
      description: 'Local police station ensuring community safety and security.',
      services: ['Emergency Response', 'Crime Reporting', 'Traffic Management', 'Community Patrol'],
      hours: '24/7 Emergency Services',
      contact: '(033) 123-4573'
    },
    {
      id: 10,
      name: 'Water Station',
      category: 'utilities',
      coordinates: { x: 35, y: 25 },
      address: '505 Utility Lane, Upper Ichon',
      description: 'Main water treatment and distribution facility.',
      services: ['Water Supply', 'Quality Testing', 'Maintenance', 'Customer Service'],
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      contact: '(033) 123-4574'
    }
  ];

  const filteredSpots = spots.filter(spot => {
    const matchesCategory = selectedCategory === 'all' || spot.category === selectedCategory;
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          spot.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : MapPin;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : '#0F4C81';
  };

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81]">{title}</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]" style={{backgroundColor: '#B3DEF8'}}>
      {/* Header (Removed since Navbar is now handled by PublicLayout) */}
      {/* The content of the original header is removed as PublicLayout provides the Navbar */}

      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upper Ichon Spot Map
            </h1>
            <p className="text-xl text-[#B3DEF8] mb-8">
              Discover important locations and facilities in our community
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3]"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3] bg-white"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-[#0F4C81] flex items-center space-x-2">
                  <MapPin size={24} />
                  <span>Interactive Map</span>
                </h2>
                <p className="text-gray-600 mt-2">Click on markers to view location details</p>
              </div>
              
              {/* Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Roads */}
                    <path d="M0,30 L100,30 M0,70 L100,70 M30,0 L30,100 M70,0 L70,100"
                          stroke="#D1D5DB" strokeWidth="0.5" fill="none" />
                    <path d="M45,0 L45,100 M55,0 L55,100"
                          stroke="#D1D5DB" strokeWidth="0.3" fill="none" />
                    
                    {/* River */}
                    <path d="M0,85 Q25,80 50,85 Q75,90 100,85 L100,95 Q75,100 50,95 Q25,90 0,95 Z"
                          fill="#7DD3FC" opacity="0.6" />
                    
                    {/* Green Areas */}
                    <circle cx="20" cy="80" r="8" fill="#86EFAC" opacity="0.7" />
                    <circle cx="80" cy="15" r="6" fill="#86EFAC" opacity="0.7" />
                  </svg>
                </div>

                {/* Location Markers */}
                {filteredSpots.map(spot => {
                  const IconComponent = getCategoryIcon(spot.category);
                  const color = getCategoryColor(spot.category);
                  
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedSpot(spot)}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200"
                      style={{
                        left: `${spot.coordinates.x}%`,
                        top: `${spot.coordinates.y}%`
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                        style={{ backgroundColor: color }}
                      >
                        <IconComponent size={16} className="text-white" />
                      </div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                        {spot.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#0F4C81] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => {
                  const IconComponent = category.icon;
                  const count = category.id === 'all' ? spots.length : spots.filter(s => s.category === category.id).length;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#B3DEF8] text-[#0F4C81]'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent size={18} style={{ color: category.color }} />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Location List */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#0F4C81] mb-4">
                Locations ({filteredSpots.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredSpots.map(spot => {
                  const IconComponent = getCategoryIcon(spot.category);
                  const color = getCategoryColor(spot.category);
                  
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedSpot(spot)}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-[#58A1D3] hover:shadow-md transition-all"
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ backgroundColor: color }}
                        >
                          <IconComponent size={12} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-[#06172E] text-sm truncate">
                            {spot.name}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {spot.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer (Removed since Footer is now handled by PublicLayout) */}
      {/* The content of the original footer is removed as PublicLayout provides the Footer */}

      {/* Location Detail Modal */}
      {selectedSpot && (
        <Modal title={selectedSpot.name}>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start space-x-4">
              {(() => {
                const IconComponent = getCategoryIcon(selectedSpot.category);
                const color = getCategoryColor(selectedSpot.category);
                return (
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    <IconComponent size={20} className="text-white" />
                  </div>
                );
              })()}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#0F4C81] mb-2">{selectedSpot.name}</h3>
                <p className="text-gray-600 flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>{selectedSpot.address}</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-[#06172E] mb-2">Description</h4>
              <p className="text-gray-700">{selectedSpot.description}</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-[#06172E] mb-2">Services Offered</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSpot.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-[#58A1D3] rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-[#06172E] mb-2">Operating Hours</h4>
                <p className="text-gray-700 text-sm">{selectedSpot.hours}</p>
              </div>
              {selectedSpot.contact !== 'N/A' && (
                <div>
                  <h4 className="font-semibold text-[#06172E] mb-2">Contact</h4>
                  <p className="text-gray-700 text-sm flex items-center space-x-1">
                    <Phone size={14} />
                    <span>{selectedSpot.contact}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4 border-t border-gray-200">
              <button className="flex-1 bg-[#0F4C81] text-white py-2 px-4 rounded-lg hover:bg-[#58A1D3] transition-colors flex items-center justify-center space-x-2">
                <Navigation size={16} />
                <span>Get Directions</span>
              </button>
              <button
                onClick={() => setSelectedSpot(null)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SpotMap;