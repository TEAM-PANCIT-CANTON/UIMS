import React, { useState } from 'react';

import { Menu, X, Users, FileText, ShieldAlert, User, Activity, LogIn, Edit2, Eye, CheckCircle, XCircle, FileText as CertificateIcon } from 'lucide-react';



const barangayLogo = './UIMS-logo.png';



// Sample users with roles

const users = [

  { username: 'captain.pablo', name: 'Hon. Miguelito Pablo', role: 'Barangay Captain' },

  { username: 'secretary.reyes', name: 'Ms. Reyes', role: 'Barangay Secretary' },

];



// Sample certificate requests

const initialCertificateRequests = [

  {

    id: 'REQ-001',

    residentName: 'Juan Dela Cruz',

    certificateType: 'Barangay Clearance',

    purpose: 'Employment',

    dateRequested: '2025-08-01',

    status: 'Pending',

    approvedBy: '',

    issuedDate: '',

  },

  {

    id: 'REQ-002',

    residentName: 'Maria Santos',

    certificateType: 'Certificate of Residency',

    purpose: 'School Application',

    dateRequested: '2025-08-03',

    status: 'Pending',

    approvedBy: '',

    issuedDate: '',

  },

];



const navItems = [

  { name: 'Dashboard', key: 'dashboard', icon: Users },

  { name: 'Complaint Records', key: 'complaints', icon: FileText },

  { name: 'Blotter Records', key: 'blotters', icon: ShieldAlert },

  { name: 'Certificate Requests', key: 'certRequests', icon: CertificateIcon },

  { name: 'Resident Records', key: 'residents', icon: Users },

  { name: 'My Profile', key: 'profile', icon: User },

];



const CaptainDashboard = () => {

  // Simulated logged-in user: Barangay Captain

  const currentUser = users[0];



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('dashboard');

  const [certificateRequests, setCertificateRequests] = useState(initialCertificateRequests);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const [showCertificateDialog, setShowCertificateDialog] = useState(false);



  // Certificate issuance template auto-filled

  const renderCertificateTemplate = (request) => (

    <div className="p-6 border border-gray-300 rounded bg-white max-w-xl mx-auto">

      <div className="text-center mb-4">

        <img src={barangayLogo} alt="Barangay Logo" className="mx-auto w-16 h-16" />

        <h2 className="text-xl font-bold mt-2">Barangay Upper Ichon</h2>

        <h3 className="text-lg font-semibold mt-1">Official Certificate</h3>

        <hr className="my-3" />

      </div>

      <p>This is to certify that <strong>{request.residentName}</strong> is a bonafide resident of Barangay Upper Ichon.</p>

      <p>Certificate Type: <strong>{request.certificateType}</strong></p>

      <p>Purpose: <strong>{request.purpose}</strong></p>

      <p>Date Issued: <strong>{new Date().toLocaleDateString()}</strong></p>

      <div className="mt-10 text-right">

        <p>_________________________</p>

        <p><strong>{currentUser.name}</strong></p>

        <p>Barangay Captain</p>

      </div>

    </div>

  );



  // Handlers for certificate request actions

  const approveRequest = (id) => {

    setCertificateRequests(prev =>

      prev.map(r => r.id === id ? { ...r, status: 'Approved', approvedBy: currentUser.name } : r)

    );

  };



  const denyRequest = (id) => {

    setCertificateRequests(prev =>

      prev.map(r => r.id === id ? { ...r, status: 'Denied', approvedBy: currentUser.name } : r)

    );

  };



  const issueCertificate = (id) => {

    const req = certificateRequests.find(r => r.id === id);

    if (!req || req.status !== 'Approved') {

      alert('Only approved requests can be issued.');

      return;

    }

    setSelectedRequest(req);

    setShowCertificateDialog(true);

  };



  const confirmIssue = () => {

    setCertificateRequests(prev =>

      prev.map(r =>

        r.id === selectedRequest.id

          ? { ...r, status: 'Issued', issuedDate: new Date().toISOString().split('T')[0] }

          : r

      )

    );

    setShowCertificateDialog(false);

    setSelectedRequest(null);

    alert('Certificate issued and request status updated.');

  };



  return (

    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">

      {/* Header */}

      <header className="bg-white shadow-lg sticky top-0 z-40">

        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <img src={barangayLogo} alt="Barangay Logo" className="w-10 h-10 rounded-full" />

          <div>

            <h1 className="text-xl font-bold text-[#0F4C81]">Barangay Captain Dashboard</h1>

            <p className="text-sm text-[#58A1D3]">Welcome, {currentUser.name}</p>

          </div>

          <button

            onClick={() => setIsMenuOpen(!isMenuOpen)}

            className="lg:hidden p-2 text-[#0F4C81] hover:bg-[#B3DEF8] rounded-lg"

          >

            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}

          </button>

        </div>

        {/* Navigation */}

        <nav className={`bg-white border-t border-gray-200 ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:max-w-7xl lg:mx-auto lg:px-4 lg:py-2`}>

          {navItems.map(item => (

            <button

              key={item.key}

              onClick={() => setActiveTab(item.key)}

              className={`flex items-center p-3 rounded-lg text-[#0F4C81] hover:bg-[#B3DEF8] transition-colors space-x-2 ${

                activeTab === item.key ? 'bg-[#B3DEF8]' : ''

              }`}

            >

              <item.icon size={18} />

              <span>{item.name}</span>

            </button>

          ))}

          <button className="ml-auto bg-[#06172E] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 flex items-center space-x-1">

            <LogIn size={16} />

            <span>Logout</span>

          </button>

        </nav>

      </header>



      {/* Main Content */}

      <main className="max-w-7xl mx-auto p-6">

        {/* Dashboard Overview */}

        {activeTab === 'dashboard' && (

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow p-6 text-center">

              <FileText className="text-[#0F4C81] mx-auto" size={32} />

              <h3 className="mt-3 text-lg font-bold text-[#0F4C81]">Complaint Records</h3>

              <p className="text-3xl font-bold text-[#06172E]">12</p>

            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">

              <ShieldAlert className="text-[#0F4C81] mx-auto" size={32} />

              <h3 className="mt-3 text-lg font-bold text-[#0F4C81]">Blotter Records</h3>

              <p className="text-3xl font-bold text-[#06172E]">7</p>

            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">

              <Users className="text-[#0F4C81] mx-auto" size={32} />

              <h3 className="mt-3 text-lg font-bold text-[#0F4C81]">Active Residents</h3>

              <p className="text-3xl font-bold text-[#06172E]">354</p>

            </div>

          </div>

        )}



        {/* Certificate Requests */}

        {activeTab === 'certRequests' && (

          <section>

            <h2 className="text-2xl font-bold text-[#0F4C81] mb-4">Certificate Requests</h2>

            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">

              <table className="min-w-full text-sm">

                <thead>

                  <tr className="text-[#0F4C81] border-b border-gray-300">

                    <th className="py-2 px-3 text-left">Request ID</th>

                    <th className="py-2 px-3 text-left">Resident Name</th>

                    <th className="py-2 px-3 text-left">Certificate Type</th>

                    <th className="py-2 px-3 text-left">Purpose</th>

                    <th className="py-2 px-3 text-left">Date Requested</th>

                    <th className="py-2 px-3 text-left">Status</th>

                    <th className="py-2 px-3 text-left">Actions</th>

                  </tr>

                </thead>

                <tbody>

                  {certificateRequests.length === 0 && (

                    <tr>

                      <td colSpan="7" className="text-center py-4 text-gray-500">No certificate requests found.</td>

                    </tr>

                  )}

                  {certificateRequests.map(req => (

                    <tr key={req.id} className="border-b hover:bg-gray-100">

                      <td className="py-2 px-3">{req.id}</td>

                      <td className="py-2 px-3">{req.residentName}</td>

                      <td className="py-2 px-3">{req.certificateType}</td>

                      <td className="py-2 px-3">{req.purpose}</td>

                      <td className="py-2 px-3">{req.dateRequested}</td>

                      <td className="py-2 px-3">{req.status}</td>

                      <td className="py-2 px-3 space-x-2 flex">

                        <button

                          className="text-blue-600 hover:underline"

                          onClick={() => setSelectedRequest(req)}

                        >

                          <Eye size={16} />

                        </button>

                        {req.status === 'Pending' && (

                          <>

                            <button

                              className="text-green-600 hover:underline"

                              onClick={() => approveRequest(req.id)}

                              title="Approve"

                            >

                              <CheckCircle size={16} />

                            </button>

                            <button

                              className="text-red-600 hover:underline"

                              onClick={() => denyRequest(req.id)}

                              title="Deny"

                            >

                              <XCircle size={16} />

                            </button>

                          </>

                        )}

                        {req.status === 'Approved' && (

                          <button

                            className="text-purple-600 hover:underline"

                            onClick={() => issueCertificate(req.id)}

                            title="Issue Certificate"

                          >

                            <CertificateIcon size={16} />

                          </button>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>

        )}



        {/* Certificate Request Details Modal */}

        {selectedRequest && (

          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">

            <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">

              <button

                onClick={() => setSelectedRequest(null)}

                className="absolute top-4 right-4 text-gray-600 hover:text-black"

              >

                <X size={24} />

              </button>

              <h3 className="text-xl font-bold mb-4 text-[#0F4C81]">Request Details</h3>

              <p><strong>Request ID:</strong> {selectedRequest.id}</p>

              <p><strong>Resident Name:</strong> {selectedRequest.residentName}</p>

              <p><strong>Certificate Type:</strong> {selectedRequest.certificateType}</p>

              <p><strong>Purpose:</strong> {selectedRequest.purpose}</p>

              <p><strong>Date Requested:</strong> {selectedRequest.dateRequested}</p>

              <p><strong>Status:</strong> {selectedRequest.status}</p>

              {selectedRequest.status === 'Issued' && (

                <p><strong>Issued Date:</strong> {selectedRequest.issuedDate}</p>

              )}

            </div>

          </div>

        )}



        {/* Certificate Issuance Confirmation Modal */}

        {showCertificateDialog && selectedRequest && (

          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-auto">

            <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative space-y-6">

              <button

                onClick={() => { setShowCertificateDialog(false); setSelectedRequest(null); }}

                className="absolute top-4 right-4 text-gray-600 hover:text-black"

              >

                <X size={24} />

              </button>

              <h3 className="text-xl font-bold mb-4 text-[#0F4C81]">Issue Certificate</h3>

              <div className="overflow-auto max-h-96">{renderCertificateTemplate(selectedRequest)}</div>

              <div className="flex justify-end space-x-4">

                <button

                  onClick={() => { setShowCertificateDialog(false); setSelectedRequest(null); }}

                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"

                >

                  Cancel

                </button>

                <button

                  onClick={confirmIssue}

                  className="px-4 py-2 rounded-lg bg-[#0F4C81] text-white hover:bg-[#58A1D3]"

                >

                  Confirm Issue

                </button>

              </div>

            </div>

          </div>

        )}



        {/* Placeholder for other tabs */}

        {(activeTab === 'complaints' || activeTab === 'blotters' || activeTab === 'residents' || activeTab === 'concerns' || activeTab === 'profile') && (

          <div className="mt-10 text-center text-gray-700 font-semibold text-lg">

            {`"${activeTab}" page content to be implemented.`}

          </div>

        )}

      </main>

    </div>

  );

};



export default CaptainDashboard;