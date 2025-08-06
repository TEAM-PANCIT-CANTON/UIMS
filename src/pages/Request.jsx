import React, { useState } from 'react';
import { FileText, User, MapPin, Phone, Mail, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const Request = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    contactNumber: '',
    email: '',
    certificateType: '',
    purpose: '',
    urgency: 'regular',
    birthDate: '',
    civilStatus: '',
    residencyYears: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const certificateTypes = [
    'Barangay Clearance',
    'Certificate of Residency',
    'Business Permit',
    'Indigency Certificate',
    'Certificate of Good Moral Character',
    'First Time Job Seeker Certificate',
    'Senior Citizen ID'
  ];

  const urgencyOptions = [
    { value: 'regular', label: 'Regular (7-10 days)', fee: '₱50' },
    { value: 'rush', label: 'Rush (3-5 days)', fee: '₱100' },
    { value: 'express', label: 'Express (1-2 days)', fee: '₱150' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.certificateType) newErrors.certificateType = 'Please select a certificate type';
    if (!formData.purpose.trim()) newErrors.purpose = 'Purpose is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      address: '',
      contactNumber: '',
      email: '',
      certificateType: '',
      purpose: '',
      urgency: 'regular',
      birthDate: '',
      civilStatus: '',
      residencyYears: ''
    });
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
        {/* Hero Section */}
        <section className="relative h-64 bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Request Submitted
              </h2>
              <p className="text-lg md:text-xl text-[#B3DEF8] font-medium drop-shadow">
                Your certificate request has been received
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
              <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>

        <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">Request Successfully Submitted!</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                <h4 className="font-semibold text-[#06172E] mb-4">Request Details:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate Type:</span>
                    <span className="font-medium">{formData.certificateType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing:</span>
                    <span className="font-medium">
                      {urgencyOptions.find(opt => opt.value === formData.urgency)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reference No:</span>
                    <span className="font-medium text-[#0F4C81]">REQ-{Date.now().toString().slice(-6)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="text-blue-600 mt-0.5" size={16} />
                  <div className="text-left text-sm">
                    <p className="text-blue-800 font-medium mb-1">Next Steps:</p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Visit the Barangay Hall for document verification</li>
                      <li>• Bring a valid ID and supporting documents</li>
                      <li>• Pay the processing fee upon pickup</li>
                      <li>• Your certificate will be ready as per the selected timeframe</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetForm}
                  className="flex-1 bg-[#58A1D3] text-white py-3 rounded-lg hover:bg-[#0F4C81] transition-colors duration-200 font-semibold"
                >
                  Submit Another Request
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="flex-1 border border-[#58A1D3] text-[#0F4C81] py-3 rounded-lg hover:bg-[#B3DEF8] transition-colors duration-200 font-semibold"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Certificate Request
            </h2>
            <p className="text-lg md:text-xl text-[#B3DEF8] font-medium drop-shadow">
              Request official documents online with ease
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
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-2 mb-6">
                <User className="text-[#0F4C81]" size={24} />
                <h3 className="text-xl font-bold text-[#0F4C81]">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#58A1D3] ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Birth Date</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complete Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#58A1D3] ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="House No., Street, Barangay"
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Civil Status</label>
                  <select
                    name="civilStatus"
                    value={formData.civilStatus}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
                  >
                    <option value="">Select Civil Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="widowed">Widowed</option>
                    <option value="separated">Separated</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#58A1D3] ${
                      errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="09XXXXXXXXX"
                  />
                  {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Certificate Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="text-[#0F4C81]" size={24} />
                <h3 className="text-xl font-bold text-[#0F4C81]">Certificate Information</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certificate Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="certificateType"
                    value={formData.certificateType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#58A1D3] ${
                      errors.certificateType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Certificate Type</option>
                    {certificateTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.certificateType && <p className="text-red-500 text-xs mt-1">{errors.certificateType}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#58A1D3] ${
                      errors.purpose ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please specify the purpose of this certificate request..."
                  />
                  {errors.purpose && <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Processing Urgency</label>
                  <div className="space-y-3">
                    {urgencyOptions.map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="text-[#0F4C81] focus:ring-[#58A1D3]"
                        />
                        <span className="flex-1 text-sm">
                          <span className="font-medium">{option.label}</span>
                          <span className="text-gray-600 ml-2">- {option.fee}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements Notice */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-2">
                <AlertCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-[#0F4C81] mb-2">Required Documents for Pickup:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Valid Government-issued ID (Original and Photocopy)</li>
                    <li>• Proof of Residency (Utility Bill, Lease Contract, etc.)</li>
                    <li>• Additional documents may be required depending on certificate type</li>
                    <li>• Processing fee to be paid upon pickup</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#0F4C81] to-[#58A1D3] text-white px-12 py-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold text-lg"
              >
                Submit Certificate Request
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Request;