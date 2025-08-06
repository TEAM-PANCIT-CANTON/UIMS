import React, { useState } from 'react';
import { ChevronRight, Clock, CheckCircle, AlertCircle, DollarSign, Users, Calendar, Activity } from 'lucide-react';

const ProjectActivity = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const openModal = (modalType, projectData) => {
    setActiveModal({ type: modalType, data: projectData });
  };
  const closeModal = () => setActiveModal(null);

  // Sample data for projects, this would typically come from an API
  const projects = [
    {
      id: 1,
      title: 'Community Health Center Expansion',
      description: 'Expanding the existing health center to serve more residents with additional medical equipment and facilities.',
      status: 'ongoing',
      progress: 75,
      budget: '₱2,500,000',
      startDate: '2024-12-01',
      expectedCompletion: '2025-09-15',
      contractor: 'ABC Construction Corp.',
      category: 'Health & Wellness',
      beneficiaries: 15000,
      updates: [
        { date: '2025-07-25', description: 'Foundation work completed, beginning structural framework' },
        { date: '2025-07-10', description: 'Site preparation and excavation finished' },
        { date: '2025-06-20', description: 'Project groundbreaking ceremony held' }
      ]
    },
    {
      id: 2,
      title: 'Road Improvement Project - Main Street',
      description: 'Complete reconstruction of Main Street including proper drainage system and sidewalks.',
      status: 'completed',
      progress: 100,
      budget: '₱1,800,000',
      startDate: '2024-10-01',
      expectedCompletion: '2025-03-30',
      contractor: 'XYZ Infrastructure Ltd.',
      category: 'Infrastructure',
      beneficiaries: 8000,
      updates: [
        { date: '2025-03-30', description: 'Project successfully completed and opened to public' },
        { date: '2025-03-15', description: 'Final inspections and quality checks conducted' },
        { date: '2025-02-28', description: 'Sidewalk construction and street lighting installation completed' }
      ]
    },
    {
      id: 3,
      title: 'Barangay Sports Complex',
      description: 'Construction of a multi-purpose sports complex with basketball and volleyball courts.',
      status: 'planning',
      progress: 15,
      budget: '₱3,200,000',
      startDate: '2025-10-01',
      expectedCompletion: '2026-06-30',
      contractor: 'To be determined',
      category: 'Sports & Recreation',
      beneficiaries: 25000,
      updates: [
        { date: '2025-07-20', description: 'Environmental impact assessment completed' },
        { date: '2025-07-01', description: 'Architectural plans finalized and approved' },
        { date: '2025-06-15', description: 'Initial feasibility study completed' }
      ]
    },
    {
      id: 4,
      title: 'Waste Management System Upgrade',
      description: 'Implementation of modern waste segregation and collection system throughout the barangay.',
      status: 'ongoing',
      progress: 45,
      budget: '₱950,000',
      startDate: '2025-03-01',
      expectedCompletion: '2025-12-31',
      contractor: 'EcoWaste Solutions Inc.',
      category: 'Environment',
      beneficiaries: 12000,
      updates: [
        { date: '2025-07-28', description: 'Phase 2 implementation in progress - Zone B collection points installed' },
        { date: '2025-06-30', description: 'Phase 1 completed successfully - Zone A fully operational' },
        { date: '2025-05-15', description: 'Community education and awareness campaign launched' }
      ]
    },
    {
      id: 5,
      title: 'LED Street Lighting Installation',
      description: 'Replacement of old street lights with energy-efficient LED lighting system.',
      status: 'completed',
      progress: 100,
      budget: '₱680,000',
      startDate: '2024-11-15',
      expectedCompletion: '2025-01-31',
      contractor: 'Bright Solutions Electric',
      category: 'Infrastructure',
      beneficiaries: 18000,
      updates: [
        { date: '2025-01-31', description: 'All 150 LED street lights successfully installed and tested' },
        { date: '2025-01-15', description: 'Installation 90% complete, final testing in progress' },
        { date: '2024-12-20', description: 'Phase 1 installation completed - 75 lights operational' }
      ]
    },
    {
      id: 6,
      title: 'Digital Learning Center',
      description: 'Establishment of a community digital learning center with computers and internet access.',
      status: 'planning',
      progress: 25,
      budget: '₱1,200,000',
      startDate: '2025-11-01',
      expectedCompletion: '2026-04-30',
      contractor: 'TechEdu Partners',
      category: 'Education',
      beneficiaries: 5000,
      updates: [
        { date: '2025-07-30', description: 'Equipment procurement process initiated' },
        { date: '2025-07-15', description: 'Site selection finalized - former community hall to be renovated' },
        { date: '2025-06-30', description: 'Budget allocation approved by barangay council' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-300';
      case 'ongoing': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle size={16} className="text-green-600" />;
      case 'ongoing': return <Clock size={16} className="text-blue-600" />;
      case 'planning': return <AlertCircle size={16} className="text-yellow-600" />;
      default: return <Clock size={16} className="text-gray-600" />;
    }
  };

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' || project.status === activeFilter
  );

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    planning: projects.filter(p => p.status === 'planning').length,
    totalBudget: projects.reduce((sum, p) => sum + parseInt(p.budget.replace(/[₱,]/g, '')), 0)
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] py-16">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Activity className="text-white" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Project Activity</h1>
            </div>
            <p className="text-xl text-[#B3DEF8] font-medium">
              Tracking our community development initiatives and progress
            </p>
          </div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-8 fill-white">
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-[#0F4C81]">{projectStats.total}</div>
            <div className="text-sm text-gray-600">Total Projects</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600">{projectStats.completed}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-blue-600">{projectStats.ongoing}</div>
            <div className="text-sm text-gray-600">Ongoing</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-yellow-600">{projectStats.planning}</div>
            <div className="text-sm text-gray-600">Planning</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-[#58A1D3]">₱{(projectStats.totalBudget / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-gray-600">Total Budget</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {['all', 'completed', 'ongoing', 'planning'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? 'bg-[#0F4C81] text-white'
                  : 'bg-white text-[#0F4C81] hover:bg-[#B3DEF8]'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0F4C81] mb-2 line-clamp-2">{project.title}</h3>
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span className="capitalize">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm font-bold text-[#0F4C81]">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#58A1D3] to-[#0F4C81] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <DollarSign size={14} />
                  <span>Budget: <span className="font-semibold text-[#06172E]">{project.budget}</span></span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users size={14} />
                  <span>Beneficiaries: <span className="font-semibold text-[#06172E]">{project.beneficiaries.toLocaleString()}</span></span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar size={14} />
                  <span>Target: <span className="font-semibold text-[#06172E]">{new Date(project.expectedCompletion).toLocaleDateString()}</span></span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">{project.description}</p>

              {/* View Details Button */}
              <button
                onClick={() => openModal('project-details', project)}
                className="w-full bg-[#58A1D3] text-white py-2 rounded-lg hover:bg-[#0F4C81] transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      {activeModal?.type === 'project-details' && (
        <Modal title={activeModal.data.title}>
          <div className="space-y-6">
            {/* Project Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#0F4C81] mb-3">Project Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(activeModal.data.status)}`}>
                      {getStatusIcon(activeModal.data.status)}
                      <span className="capitalize">{activeModal.data.status}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-semibold">{activeModal.data.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start Date:</span>
                    <span className="font-semibold">{new Date(activeModal.data.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Completion:</span>
                    <span className="font-semibold">{new Date(activeModal.data.expectedCompletion).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contractor:</span>
                    <span className="font-semibold">{activeModal.data.contractor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold">{activeModal.data.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Beneficiaries:</span>
                    <span className="font-semibold">{activeModal.data.beneficiaries.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#0F4C81] mb-3">Progress Overview</h4>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                    <span className="text-sm font-bold text-[#0F4C81]">{activeModal.data.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#58A1D3] to-[#0F4C81] h-3 rounded-full"
                      style={{ width: `${activeModal.data.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-[#06172E] mb-2">Project Description</h5>
                  <p className="text-sm text-gray-700">{activeModal.data.description}</p>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div>
              <h4 className="font-bold text-[#0F4C81] mb-4">Recent Updates</h4>
              <div className="space-y-4">
                {activeModal.data.updates.map((update, index) => (
                  <div key={index} className="border-l-4 border-[#58A1D3] pl-4 py-2 bg-gray-50 rounded-r-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar size={14} className="text-[#58A1D3]" />
                      <span className="text-sm font-semibold text-[#06172E]">
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{update.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectActivity;
