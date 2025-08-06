import React, { useState } from 'react';
import { Users, Phone, Mail, MapPin, Calendar, Award, X } from 'lucide-react';

const Officials = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedOfficial, setSelectedOfficial] = useState(null);
  
  const openModal = (modalType, official = null) => {
    setActiveModal(modalType);
    setSelectedOfficial(official);
  };
  
  const closeModal = () => {
    setActiveModal(null);
    setSelectedOfficial(null);
  };

  const officials = [
    {
      id: 1,
      name: "Hon. Maria Santos",
      position: "Barangay Captain",
      term: "2023 - 2026",
      phone: "(033) 123-4567",
      email: "captain@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Implemented Digital Governance System",
        "Led Community Development Programs",
        "Established Youth Skills Training Center"
      ],
      bio: "A dedicated public servant with over 15 years of experience in community leadership. Maria has been instrumental in modernizing Upper Ichon's governance and improving community services.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=MS"
    },
    {
      id: 2,
      name: "Hon. Roberto Cruz",
      position: "Barangay Kagawad - Health & Sanitation",
      term: "2023 - 2026",
      phone: "(033) 123-4568",
      email: "health@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Launched Mobile Health Clinic Program",
        "Organized COVID-19 Vaccination Drives",
        "Improved Waste Management System"
      ],
      bio: "Former nurse with 20 years of healthcare experience. Roberto focuses on improving health services and maintaining high sanitation standards in the community.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=RC"
    },
    {
      id: 3,
      name: "Hon. Ana Reyes",
      position: "Barangay Kagawad - Education & Youth",
      term: "2023 - 2026",
      phone: "(033) 123-4569",
      email: "education@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Established Scholarship Program",
        "Created Youth Leadership Council",
        "Built Community Learning Center"
      ],
      bio: "Former school principal passionate about education and youth development. Ana champions programs that provide opportunities for the younger generation.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=AR"
    },
    {
      id: 4,
      name: "Hon. Carlos Mendoza",
      position: "Barangay Kagawad - Infrastructure & Environment",
      term: "2023 - 2026",
      phone: "(033) 123-4570",
      email: "infrastructure@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Completed Road Improvement Project",
        "Initiated Tree Planting Campaign",
        "Developed Flood Control System"
      ],
      bio: "Civil engineer with expertise in sustainable infrastructure development. Carlos focuses on creating environmentally-friendly solutions for community needs.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=CM"
    },
    {
      id: 5,
      name: "Hon. Teresa Lopez",
      position: "Barangay Kagawad - Women & Senior Citizens",
      term: "2023 - 2026",
      phone: "(033) 123-4571",
      email: "womensafety@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Established Women's Safety Program",
        "Created Senior Citizens Support Group",
        "Launched Livelihood Training for Women"
      ],
      bio: "Social worker dedicated to empowering women and supporting senior citizens. Teresa advocates for inclusive programs that address diverse community needs.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=TL"
    },
    {
      id: 6,
      name: "Hon. Diego Fernandez",
      position: "Barangay Kagawad - Peace & Order",
      term: "2023 - 2026",
      phone: "(033) 123-4572",
      email: "peaceorder@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Reduced Crime Rate by 40%",
        "Established Barangay Patrol System",
        "Created Conflict Resolution Program"
      ],
      bio: "Former police officer committed to maintaining peace and security. Diego works closely with law enforcement to ensure community safety.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=DF"
    },
    {
      id: 7,
      name: "Hon. Luz Gonzales",
      position: "Barangay Kagawad - Sports & Recreation",
      term: "2023 - 2026",
      phone: "(033) 123-4573",
      email: "sports@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Built New Sports Complex",
        "Organized Annual Sports Festival",
        "Created Youth Sports Leagues"
      ],
      bio: "Former athlete and sports coach passionate about promoting healthy lifestyles. Luz develops recreational programs for all age groups.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=LG"
    },
    {
      id: 8,
      name: "Ms. Jennifer Tan",
      position: "Barangay Secretary",
      term: "2023 - 2026",
      phone: "(033) 123-4574",
      email: "secretary@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Digitized Barangay Records System",
        "Streamlined Certificate Processing",
        "Improved Document Management"
      ],
      bio: "Administrative professional with expertise in records management and public service. Jennifer ensures efficient operations of barangay services.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=JT"
    },
    {
      id: 9,
      name: "Mr. Michael Torres",
      position: "Barangay Treasurer",
      term: "2023 - 2026",
      phone: "(033) 123-4575",
      email: "treasurer@upperichon.gov.ph",
      address: "Upper Ichon, Iloilo City",
      achievements: [
        "Maintained 100% Budget Transparency",
        "Implemented Financial Management System",
        "Secured Development Grants"
      ],
      bio: "Certified public accountant ensuring transparent and efficient financial management. Michael oversees all barangay financial operations.",
      image: "https://placehold.co/150x150/0F4C81/B3DEF8?text=MT"
    }
  ];

  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81]">{title}</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Barangay Officials
            </h2>
            <p className="text-lg md:text-xl text-[#B3DEF8] font-medium drop-shadow">
              Meet Your Community Leaders
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
        <div className="max-w-7xl mx-auto">
          {/* Officials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officials.map((official) => (
              <div key={official.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0F4C81] to-[#58A1D3] flex items-center justify-center">
                      <img src={official.image} alt={`${official.name} profile`} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  
                  {/* Official Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-[#0F4C81] mb-1">{official.name}</h3>
                    <p className="text-sm text-[#58A1D3] font-medium mb-2">{official.position}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-600">
                      <Calendar size={12} />
                      <span>Term: {official.term}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone size={14} />
                      <span>{official.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail size={14} />
                      <span className="truncate">{official.email}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => openModal('official-details', official)}
                    className="w-full bg-[#58A1D3] text-white py-2 rounded-lg hover:bg-[#0F4C81] transition-colors duration-200 text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 inline-block max-w-2xl">
              <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">Contact Our Officials</h3>
              <p className="text-gray-600 mb-6">
                Have questions or concerns? Reach out to our barangay officials directly or visit our office during business hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin size={16} className="text-[#58A1D3]" />
                  <span>Upper Ichon Barangay Hall, Iloilo City</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone size={16} className="text-[#58A1D3]" />
                  <span>(033) 123-4567</span>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Official Details Modal */}
      {activeModal === 'official-details' && selectedOfficial && (
        <Modal title={selectedOfficial.name}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0F4C81] to-[#58A1D3] flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src={selectedOfficial.image} alt={`${selectedOfficial.name} profile`} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#0F4C81] mb-2">{selectedOfficial.name}</h3>
                <p className="text-[#58A1D3] font-medium mb-2">{selectedOfficial.position}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                  <Calendar size={14} />
                  <span>Term: {selectedOfficial.term}</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-[#0F4C81] mb-3">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone size={14} className="text-[#58A1D3]" />
                    <span>{selectedOfficial.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail size={14} className="text-[#58A1D3]" />
                    <span>{selectedOfficial.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin size={14} className="text-[#58A1D3]" />
                    <span>{selectedOfficial.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2">
              {/* Biography */}
              <div className="mb-6">
                <h4 className="font-bold text-[#0F4C81] mb-3">Biography</h4>
                <p className="text-gray-700 leading-relaxed">{selectedOfficial.bio}</p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-bold text-[#0F4C81] mb-3 flex items-center space-x-2">
                  <Award size={18} />
                  <span>Key Achievements</span>
                </h4>
                <ul className="space-y-2">
                  {selectedOfficial.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#58A1D3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Officials;
