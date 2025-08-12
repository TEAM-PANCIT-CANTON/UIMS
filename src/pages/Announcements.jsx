import React, { useState } from 'react';
import {
  Bell, Clock, AlertCircle, Info, CheckCircle, FileText, Calendar, MapPin
} from 'lucide-react';


const Announcements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const announcements = [
    {
      id: 1,
      title: 'Barangay Clean-up Drive',
      date: 'April 20, 2025',
      time: '6:00 AM - 12:00 PM',
      priority: 'high',
      category: 'community',
      author: 'Barangay Captain',
      content: 'Join us for our monthly community clean-up drive! We will be cleaning the main streets, parks, and public areas...',
      location: 'Barangay Hall Assembly Point',
      status: 'active'
    },
    {
      id: 2,
      title: 'Health Seminar for Senior Citizens',
      date: 'April 25, 2025',
      time: '2:00 PM - 5:00 PM',
      priority: 'medium',
      category: 'health',
      author: 'Health Committee',
      content: 'Free health seminar focusing on common health issues affecting senior citizens...',
      location: 'Community Center',
      status: 'active'
    },
    // Add more announcement objects here
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'community', label: 'Community' },
    { value: 'health', label: 'Health' },
    { value: 'meeting', label: 'Meetings' },
    { value: 'utilities', label: 'Utilities' },
    { value: 'programs', label: 'Programs' },
    { value: 'sports', label: 'Sports' },
    { value: 'services', label: 'Services' }
  ];

  const priorities = [
    { value: 'all', label: 'All Priorities' },
    { value: 'high', label: 'High Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'low', label: 'Low Priority' }
  ];

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return <AlertCircle className="text-red-500" size={16} />;
      case 'medium': return <Info className="text-yellow-500" size={16} />;
      case 'low': return <CheckCircle className="text-green-500" size={16} />;
      default: return <Bell className="text-gray-500" size={16} />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', label: 'Active' },
      scheduled: { color: 'bg-blue-100 text-blue-800', label: 'Scheduled' },
      updated: { color: 'bg-yellow-100 text-yellow-800', label: 'Updated' },
      registration: { color: 'bg-purple-100 text-purple-800', label: 'Registration Open' },
      deadline: { color: 'bg-red-100 text-red-800', label: 'Deadline Approaching' }
    };

    const config = statusConfig[status] || statusConfig.active;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    const categoryMatch = selectedCategory === 'all' || announcement.category === selectedCategory;
    const priorityMatch = selectedPriority === 'all' || announcement.priority === selectedPriority;
    return categoryMatch && priorityMatch;
  });

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
      {/* Header */}
      
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold">Announcements</h1>
          <p className="text-xl font-medium text-[#B3DEF8] mt-2">
            Stay updated with the latest community news
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Bell className="text-[#0F4C81]" size={20} />
              <h2 className="text-lg font-semibold text-[#0F4C81]">Filter Announcements</h2>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3] text-sm"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58A1D3] text-sm"
              >
                {priorities.map(priority => (
                  <option key={priority.value} value={priority.value}>{priority.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className={`bg-white rounded-xl shadow-lg border-l-4 overflow-hidden ${getPriorityColor(announcement.priority)}`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      {getPriorityIcon(announcement.priority)}
                      <h3 className="text-xl font-bold text-[#0F4C81]">{announcement.title}</h3>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{announcement.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{announcement.time}</span>
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(announcement.status)}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {announcement.content}
                </p>

                <div className="border-t border-gray-200 pt-4 text-sm flex justify-between">
                  <div className="flex items-center text-gray-600 space-x-1">
                    <MapPin size={14} />
                    <span>{announcement.location}</span>
                  </div>
                  <span className="text-gray-500">By: {announcement.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
          
        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-lg p-8 inline-block">
              <FileText className="text-gray-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Announcements Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;
