import React, { useState } from 'react';
import { Menu, X, MapPin, Calendar, Users, FileText, Phone, Award, History, Activity, ArrowLeft, Bell, Clock, AlertCircle, Info, CheckCircle } from 'lucide-react';

const AnnouncementsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  const announcements = [
    {
      id: 1,
      title: 'Barangay Clean-up Drive',
      date: 'April 20, 2025',
      time: '6:00 AM - 12:00 PM',
      priority: 'high',
      category: 'community',
      author: 'Barangay Captain',
      content: 'Join us for our monthly community clean-up drive! We will be cleaning the main streets, parks, and public areas. All residents are encouraged to participate. Please bring your own cleaning materials if possible. Light refreshments will be provided.',
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
      content: 'Free health seminar focusing on common health issues affecting senior citizens. Topics include diabetes management, hypertension control, and basic first aid. Free health check-up will be available after the seminar.',
      location: 'Community Center',
      status: 'active'
    },
    {
      id: 3,
      title: 'Community Meeting Rescheduled',
      date: 'May 3, 2025',
      time: '7:00 PM - 9:00 PM',
      priority: 'low',
      category: 'meeting',
      author: 'Secretary',
      content: 'The monthly community meeting originally scheduled for April 28 has been rescheduled to May 3, 2025. We will discuss the upcoming fiesta preparations and budget allocation for community projects.',
      location: 'Barangay Hall',
      status: 'updated'
    },
    {
      id: 4,
      title: 'New COVID-19 Health Protocols',
      date: 'April 15, 2025',
      time: 'Effective Immediately',
      priority: 'high',
      category: 'health',
      author: 'Health Officer',
      content: 'Updated health protocols are now in effect following recent guidelines from the Department of Health. Face masks are still required in enclosed public spaces. Social distancing measures remain in place for large gatherings.',
      location: 'All Public Areas',
      status: 'active'
    },
    {
      id: 5,
      title: 'Water Service Interruption Notice',
      date: 'April 22, 2025',
      time: '8:00 AM - 4:00 PM',
      priority: 'high',
      category: 'utilities',
      author: 'Utilities Committee',
      content: 'Water service will be temporarily interrupted due to pipe maintenance and repair works. Affected areas include Sitio Maligaya, Sitio Masaya, and surrounding streets. Water trucks will be deployed for emergency needs.',
      location: 'Specified Areas',
      status: 'scheduled'
    },
    {
      id: 6,
      title: 'Registration for Skills Training Program',
      date: 'May 10, 2025',
      time: '9:00 AM - 5:00 PM',
      priority: 'medium',
      category: 'programs',
      author: 'Livelihood Committee',
      content: 'Registration is now open for our Skills Training Program including computer literacy, cooking classes, and basic automotive repair. Limited slots available. Requirements: Barangay residency certificate and valid ID.',
      location: 'Barangay Hall',
      status: 'registration'
    },
    {
      id: 7,
      title: 'Basketball League Registration',
      date: 'April 30, 2025',
      time: 'Until 5:00 PM',
      priority: 'low',
      category: 'sports',
      author: 'Sports Committee',
      content: 'Registration deadline for the Inter-Purok Basketball League is extended until April 30. Team registration fee is P500. All players must be bonafide residents of Upper Ichon. Games will start on May 15.',
      location: 'Sports Complex',
      status: 'deadline'
    },
    {
      id: 8,
      title: 'Free Legal Consultation Day',
      date: 'May 5, 2025',
      time: '10:00 AM - 3:00 PM',
      priority: 'medium',
      category: 'services',
      author: 'Legal Affairs Committee',
      content: 'Free legal consultation service provided by volunteer lawyers from the Integrated Bar of the Philippines. Areas covered include family law, property disputes, and labor issues. First come, first served basis.',
      location: 'Conference Room, Barangay Hall',
      status: 'scheduled'
    }
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
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]" style={{backgroundColor: '#B3DEF8'}}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0F4C81] to-[#58A1D3] rounded-full flex items-center justify-center" style={{backgroundColor: '#0F4C81'}}>
                <img
                 src="/images/UIMS-logo.png"
                 alt="Upper Ichon Logo"
                 className="w-full h-full object-cover"
                />
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
                    item.name === 'Announcements' 
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
                    item.name === 'Announcements' 
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
      <div className="bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 text-white mb-6">
            <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-4xl font-bold">Announcements</h1>
              <p className="text-xl font-medium text-[#B3DEF8] mt-2">Stay updated with the latest community news</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${getPriorityColor(announcement.priority)}`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getPriorityIcon(announcement.priority)}
                      <h3 className="text-xl font-bold text-[#0F4C81] line-clamp-2">{announcement.title}</h3>
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

                {/* Content */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {announcement.content}
                </p>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin size={14} />
                      <span>{announcement.location}</span>
                    </div>
                    <div className="text-gray-500">
                      By: {announcement.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
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
    </div>
  );
};

export default AnnouncementsPage;
