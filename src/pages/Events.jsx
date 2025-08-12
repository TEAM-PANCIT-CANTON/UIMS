import React, { useState } from 'react';
import {
  Clock, Filter, Search, MapPin, Calendar, Users, History, X
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Events = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (modalType, eventData = null) => {
    setActiveModal({ type: modalType, data: eventData });
  };
  const closeModal = () => setActiveModal(null);

  const events = [
    {
      id: 1,
      title: 'Barangay Fiesta Celebration',
      date: '2025-05-01',
      time: '9:00 AM - 10:00 PM',
      location: 'Barangay Plaza',
      category: 'celebration',
      description: 'Annual barangay fiesta with food, performances, and games.',
      organizer: 'Barangay Council',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Health and Wellness Seminar',
      date: '2025-04-25',
      time: '2:00 PM - 5:00 PM',
      location: 'Barangay Hall',
      category: 'health',
      description: 'Free seminar for senior citizens on wellness topics.',
      organizer: 'Health Committee',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Nutrition Month Celebration',
      date: '2025-03-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Barangay Plaza',
      category: 'health',
      description: 'Activities and services in celebration of Nutrition Month.',
      organizer: 'Health Committee',
      status: 'completed'
    }
  ];

  const eventCategories = [
    { value: 'all', label: 'All Events' },
    { value: 'celebration', label: 'Celebrations' },
    { value: 'health', label: 'Health' },
    { value: 'environment', label: 'Environment' },
    { value: 'sports', label: 'Sports' },
    { value: 'community', label: 'Community' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = selectedFilter === 'all' || event.category === selectedFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(e => e.status === 'upcoming');
  const pastEvents = filteredEvents.filter(e => e.status === 'completed');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#0F4C81]">{title}</h2>
          <button onClick={closeModal} className="text-gray-600 hover:text-red-600">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#0F4C81] mb-1">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
        <div className="text-sm text-gray-500 mb-3 space-y-1">
          <div className="flex items-center gap-2">
            <Calendar size={14} /> <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} /> <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> <span>{event.location}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-400">By {event.organizer}</span>
          <button
            onClick={() => openModal('eventDetails', event)}
            className="bg-[#58A1D3] hover:bg-[#0F4C81] text-white text-sm px-4 py-2 rounded-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
      {/* Header */}
      
      <div className="bg-[#0F4C81] text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Barangay Events</h1>
        <p className="text-lg text-[#B3DEF8]">Stay updated on upcoming and past events</p>
      </div>

      {/* Filters */}
      <div className="w-full px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-1/2">
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-[#0F4C81]" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3]"
            >
              {eventCategories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4">Upcoming Events</h2>
          {upcomingEvents.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white text-center p-8 rounded-lg shadow">
              <Calendar size={40} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No upcoming events found.</p>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4">Past Events</h2>
          {pastEvents.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white text-center p-8 rounded-lg shadow">
              <History size={40} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No past events available.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
       
      {activeModal?.type === 'eventDetails' && (
        <Modal title={activeModal.data.title}>
          <p className="text-gray-700 text-sm leading-relaxed">
            {activeModal.data.description}
          </p>
          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={14} /> {formatDate(activeModal.data.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} /> {activeModal.data.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} /> {activeModal.data.location}
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} /> {activeModal.data.organizer}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Events;
