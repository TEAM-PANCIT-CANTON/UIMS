import React, { useState } from 'react';
import { Menu, X, MapPin, Calendar, Users, FileText, Phone, Award, History, Activity, Clock, Filter, Search } from 'lucide-react';

const EventsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (modalType, eventData = null) => {
    setActiveModal({ type: modalType, data: eventData });
  };
  const closeModal = () => setActiveModal(null);

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

  const events = [
    {
      id: 1,
      title: 'Barangay Fiesta Celebration',
      date: '2025-05-01',
      time: '9:00 AM - 10:00 PM',
      location: 'Barangay Plaza',
      category: 'celebration',
      description: 'Join us for our annual barangay fiesta featuring local food, cultural performances, games, and entertainment for the whole family.',
      organizer: 'Barangay Council',
      status: 'upcoming',
      image: 'fiesta-banner.jpg'
    },
    {
      id: 2,
      title: 'Community Clean-up Drive',
      date: '2025-04-20',
      time: '6:00 AM - 12:00 PM',
      location: 'Various Barangay Areas',
      category: 'community',
      description: 'Help keep our community clean and green. Bring your cleaning materials and join fellow residents in this environmental initiative.',
      organizer: 'Environmental Committee',
      status: 'upcoming',
      image: 'cleanup-banner.jpg'
    },
    {
      id: 3,
      title: 'Health and Wellness Seminar',
      date: '2025-04-25',
      time: '2:00 PM - 5:00 PM',
      location: 'Barangay Hall',
      category: 'health',
      description: 'Free health seminar for senior citizens covering topics on nutrition, exercise, and preventive healthcare.',
      organizer: 'Health Committee',
      status: 'upcoming',
      image: 'health-banner.jpg'
    },
    {
      id: 4,
      title: 'Tree Planting Activity',
      date: '2025-06-05',
      time: '7:00 AM - 11:00 AM',
      location: 'Riverside Park',
      category: 'environment',
      description: 'World Environment Day tree planting activity. Help us plant 500 trees to make our community greener and more sustainable.',
      organizer: 'Environmental Committee',
      status: 'upcoming',
      image: 'tree-planting-banner.jpg'
    },
    {
      id: 5,
      title: 'Barangay Sports Festival',
      date: '2025-07-15',
      time: '8:00 AM - 6:00 PM',
      location: 'Sports Complex',
      category: 'sports',
      description: 'Annual sports festival featuring basketball, volleyball, badminton, and track and field events for all age groups.',
      organizer: 'Sports Committee',
      status: 'upcoming',
      image: 'sports-banner.jpg'
    },
    {
      id: 6,
      title: 'Nutrition Month Celebration',
      date: '2025-03-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Barangay Plaza',
      category: 'health',
      description: 'Nutrition education activities, cooking demonstrations, and free health check-ups for all community members.',
      organizer: 'Health Committee',
      status: 'completed',
      image: 'nutrition-banner.jpg'
    }
  ];

  const eventCategories = [
    { value: 'all', label: 'All Events', color: '#0F4C81' },
    { value: 'celebration', label: 'Celebrations', color: '#E91E63' },
    { value: 'community', label: 'Community', color: '#4CAF50' },
    { value: 'health', label: 'Health', color: '#FF9800' },
    { value: 'environment', label: 'Environment', color: '#2196F3' },
    { value: 'sports', label: 'Sports', color: '#9C27B0' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = selectedFilter === 'all' || event.category === selectedFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'completed');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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

  const EventCard = ({ event, isCompact = false }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${isCompact ? 'mb-4' : ''}`}>
      <div className={`h-32 bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] flex items-center justify-center`}>
        <div className="text-center text-white">
          <Calendar size={32} className="mx-auto mb-2" />
          <p className="text-sm font-medium">{event.category.charAt(0).toUpperCase() + event.category.slice(1)}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-[#0F4C81] flex-1">{event.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            event.status === 'upcoming' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-[#58A1D3]" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-[#58A1D3]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-[#58A1D3]" />
            <span>{event.location}</span>
          </div>
        </div>
        
        {!isCompact && (
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">{event.description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">By {event.organizer}</span>
          <button 
            onClick={() => openModal('eventDetails', event)}
            className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors duration-200 text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]" style={{backgroundColor: '#B3DEF8'}}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C81] to-[#58A1D3] rounded-full flex items-center justify-center" style={{backgroundColor: '#0F4C81'}}>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#0F4C81] font-bold text-lg">UI</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{color: '#0F4C81'}}>Upper Ichon</h1>
                <p className="text-sm" style={{color: '#58A1D3'}}>Management System</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center space-x-1 ${
                    item.name === 'Events' 
                      ? 'bg-[#B3DEF8] text-[#0F4C81]' 
                      : 'text-[#0F4C81] hover:bg-[#B3DEF8]'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
              <button className="bg-[#06172E] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 ml-4">
                Login
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-[#0F4C81] hover:bg-[#B3DEF8] rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors flex items-center space-x-2 ${
                    item.name === 'Events' 
                      ? 'bg-[#B3DEF8] text-[#0F4C81]' 
                      : 'text-[#0F4C81] hover:bg-[#B3DEF8]'
                  }`}
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

      {/* Page Header */}
      <section className="relative h-64 bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Community Events
            </h2>
            <p className="text-lg md:text-xl text-[#B3DEF8] font-medium drop-shadow">
              Stay updated with all barangay activities and celebrations
            </p>
          </div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-[#0F4C81]" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3]"
              >
                {eventCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Event Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {eventCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedFilter(category.value)}
              className={`p-4 rounded-xl text-center transition-all duration-200 ${
                selectedFilter === category.value
                  ? 'bg-white shadow-lg scale-105'
                  : 'bg-white/80 hover:bg-white hover:shadow-md'
              }`}
            >
              <div 
                className="w-8 h-8 rounded-full mx-auto mb-2" 
                style={{ backgroundColor: category.color }}
              ></div>
              <p className="text-sm font-medium text-[#0F4C81]">{category.label}</p>
              <p className="text-xs text-gray-500">
                {category.value === 'all' 
                  ? events.length 
                  : events.filter(e => e.category === category.value).length
                } events
              </p>
            </button>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#0F4C81] mb-6">Upcoming Events</h3>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">No upcoming events match your criteria.</p>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-[#0F4C81] mb-6">Past Events</h3>
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <History size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">No past events match your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
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
                <li><a href="#announcements" className="text-gray-300 hover:text-white transition-colors">Announcements</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
                <li><a href="#officials" className="text-gray-300 hover:text-white transition-colors">Officials</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
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

      {/* Event Details Modal */}
      {activeModal?.type === 'eventDetails' && (
        <Modal title={activeModal.data?.title}>
          <div className="space-y-6">
            <div className="h-48 bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Calendar size={48} className="mx-auto mb-2" />
                <p className="text-lg font-medium">{activeModal.data?.category.charAt(0).toUpperCase() + activeModal.data?.category.slice(1)} Event</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0F4C81] mb-2">Event Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2 text-[#58A1D3]" />
                      <span>{formatDate(activeModal.data?.date)}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock size={16} className="mr-2 text-[#58A1D3]" />
                      <span>{activeModal.data?.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin size={16} className="mr-2 text-[#58A1D3]" />
                      <span>{activeModal.data?.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={16} className="mr-2 text-[#58A1D3]" />
                      <span>Organized by {activeModal.data?.organizer}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#0F4C81] mb-2">Status</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activeModal.data?.status === 'upcoming' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {activeModal.data?.status === 'upcoming' ? 'Upcoming Event' : 'Completed Event'}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#0F4C81] mb-2">Description</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {activeModal.data?.description}
                </p>
                
                {activeModal.data?.status === 'upcoming' && (
                  <div className="mt-6 space-y-2">
                    <button className="w-full bg-[#0F4C81] text-white py-2 rounded-lg hover:bg-[#58A1D3] transition-colors">
                      Register for Event
                    </button>
                    <button className="w-full border border-[#0F4C81] text-[#0F4C81] py-2 rounded-lg hover:bg-[#B3DEF8] transition-colors">
                      Add to Calendar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EventsPage;