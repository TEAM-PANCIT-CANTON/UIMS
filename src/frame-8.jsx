import React, { useState } from 'react';
import { Menu, X, Users, FileText, ShieldAlert, User, Activity, LogIn, Edit2, Eye } from 'lucide-react';

const councilor = {
  name: "Hon. Miguelito Pablo",
  role: "Barangay Councilor Member",
  username: "miguelito.pablo"
};

const navItems = [
  { name: 'Complaint Records', key: 'complaints', icon: FileText },
  { name: 'Blotter Report', key: 'blotter', icon: ShieldAlert },
  { name: 'My Profile', key: 'profile', icon: User },
];

const initialComplaints = [
  { 
    id: 'C-0457', 
    complainant: 'Juan Dela Cruz', 
    type: 'Noise', 
    date: '2025-07-18', 
    status: 'Resolved', 
    narrative: 'Loud music at night.', 
    remarks: 'Counseling done.', 
    actionTaken: 'Visited complainant.' 
  },
];
const initialBlotters = [
  { 
    id: 'B-1281', 
    parties: 'Pedro Santos vs. Mario Reyes', 
    summary: 'Physical altercation', 
    status: 'Ongoing', 
    remarks: 'Waiting for mediation.', 
    actionTaken: 'Police notified.' 
  },
];

const users = [
  { username: "miguelito.pablo", name: "Hon. Miguelito Pablo", role: "Councilor" },
  { username: "captain.santos", name: "Hon. Santos", role: "Barangay Captain" },
  { username: "secretary.reyes", name: "Ms. Reyes", role: "Barangay Secretary" },
];

const Frame_8 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [showBlotterForm, setShowBlotterForm] = useState(false);
  const [complaints, setComplaints] = useState(initialComplaints);
  const [blotters, setBlotters] = useState(initialBlotters);
  const [activityLog, setActivityLog] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  // Complaint form state
  const [complaintForm, setComplaintForm] = useState({
    complainant: '', type: '', date: '', narrative: '', evidence: null, remarks: '', actionTaken: ''
  });
  // Blotter form state
  const [blotterForm, setBlotterForm] = useState({
    parties: '', summary: '', status: 'Ongoing', remarks: '', actionTaken: ''
  });

  // Edit/View Complaint
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [editComplaint, setEditComplaint] = useState(null);

  // Edit/View Blotter
  const [selectedBlotter, setSelectedBlotter] = useState(null);
  const [editBlotter, setEditBlotter] = useState(null);

  // Simulate logged-in user (for demo, use councilor)
  const currentUser = users[0];

  // Complaint CRUD
  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    const newId = `C-${Math.floor(1000 + Math.random() * 9000)}`;
    setComplaints([...complaints, { id: newId, ...complaintForm, status: 'Pending' }]);
    setActivityLog([
      {
        action: 'Complaint recorded',
        id: newId,
        time: new Date(),
        status: 'Success',
        user: currentUser.name,
        remarks: complaintForm.remarks,
        actionTaken: complaintForm.actionTaken
      },
      ...activityLog,
    ]);
    setConfirmation(`Complaint successfully recorded. Case ID: ${newId}`);
    setShowComplaintForm(false);
    setComplaintForm({ complainant: '', type: '', date: '', narrative: '', evidence: null, remarks: '', actionTaken: '' });
  };

  const handleComplaintEdit = (e) => {
    e.preventDefault();
    setComplaints(complaints.map(c => c.id === editComplaint.id ? editComplaint : c));
    setActivityLog([
      {
        action: 'Complaint updated',
        id: editComplaint.id,
        time: new Date(),
        status: 'Edited',
        user: currentUser.name,
        remarks: editComplaint.remarks,
        actionTaken: editComplaint.actionTaken
      },
      ...activityLog,
    ]);
    setEditComplaint(null);
    setConfirmation(`Complaint ${editComplaint.id} updated.`);
  };

  // Blotter CRUD
  const handleBlotterSubmit = (e) => {
    e.preventDefault();
    const newId = `B-${Math.floor(1000 + Math.random() * 9000)}`;
    setBlotters([...blotters, { id: newId, ...blotterForm }]);
    setActivityLog([
      {
        action: 'Blotter report saved',
        id: newId,
        time: new Date(),
        status: 'Success',
        user: currentUser.name,
        remarks: blotterForm.remarks,
        actionTaken: blotterForm.actionTaken
      },
      ...activityLog,
    ]);
    setConfirmation(`Blotter report saved. Entry ID: ${newId}`);
    setShowBlotterForm(false);
    setBlotterForm({ parties: '', summary: '', status: 'Ongoing', remarks: '', actionTaken: '' });
  };

  const handleBlotterEdit = (e) => {
    e.preventDefault();
    setBlotters(blotters.map(b => b.id === editBlotter.id ? editBlotter : b));
    setActivityLog([
      {
        action: 'Blotter updated',
        id: editBlotter.id,
        time: new Date(),
        status: 'Edited',
        user: currentUser.name,
        remarks: editBlotter.remarks,
        actionTaken: editBlotter.actionTaken
      },
      ...activityLog,
    ]);
    setEditBlotter(null);
    setConfirmation(`Blotter ${editBlotter.id} updated.`);
  };

  // Search/filter state
  const [complaintSearch, setComplaintSearch] = useState('');
  const [blotterSearch, setBlotterSearch] = useState('');

  const filteredComplaints = complaints.filter(c =>
    c.id.toLowerCase().includes(complaintSearch.toLowerCase()) ||
    c.complainant.toLowerCase().includes(complaintSearch.toLowerCase()) ||
    c.type.toLowerCase().includes(complaintSearch.toLowerCase()) ||
    c.status.toLowerCase().includes(complaintSearch.toLowerCase())
  );

  const filteredBlotters = blotters.filter(b =>
    b.id.toLowerCase().includes(blotterSearch.toLowerCase()) ||
    b.parties.toLowerCase().includes(blotterSearch.toLowerCase()) ||
    b.summary.toLowerCase().includes(blotterSearch.toLowerCase()) ||
    b.status.toLowerCase().includes(blotterSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <img 
              src="./UIMS-logo.png" 
              alt="UI Icon" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#0F4C81' }}>Upper Ichon</h1>
              <p className="text-sm" style={{ color: '#58A1D3' }}>Councilor Dashboard</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#B3DEF8] flex items-center justify-center">
                <Users className="text-[#0F4C81]" size={22} />
              </div>
              <div>
                <span className="block font-semibold text-[#0F4C81]">{currentUser.name}</span>
                <span className="block text-xs text-[#58A1D3]">{currentUser.role}</span>
              </div>
            </div>
            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#0F4C81] hover:bg-[#B3DEF8] rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Nav */}
        <nav className={`bg-white border-t border-gray-200 ${isMenuOpen ? '' : 'hidden'} lg:block`}>
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col lg:flex-row gap-2">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium text-[#0F4C81] hover:bg-[#B3DEF8] transition-colors space-x-2 ${activeTab === item.key ? 'bg-[#B3DEF8]' : ''}`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => setActiveTab('activitylog')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium text-[#0F4C81] hover:bg-[#B3DEF8] transition-colors space-x-2 ${activeTab === 'activitylog' ? 'bg-[#B3DEF8]' : ''}`}
            >
              <Activity size={18} />
              <span>Activity Log</span>
            </button>
            <button className="ml-auto bg-[#06172E] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 flex items-center space-x-1">
              <LogIn size={16} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Confirmation */}
        {confirmation && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg flex items-center justify-between">
            <span>{confirmation}</span>
            <button onClick={() => setConfirmation(null)} className="ml-4 text-green-700 hover:text-green-900">
              <X size={18} />
            </button>
          </div>
        )}

        {/* Dashboard Widgets */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <FileText className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Complaints</h3>
              <span className="text-3xl font-bold text-[#06172E]">{complaints.length}</span>
              <button
                onClick={() => setActiveTab('complaints')}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                View Complaints
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <ShieldAlert className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Blotter Reports</h3>
              <span className="text-3xl font-bold text-[#06172E]">{blotters.length}</span>
              <button
                onClick={() => setActiveTab('blotter')}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                View Blotter Reports
              </button>
            </div>
          </div>
        )}

        {/* Complaint Records */}
        {activeTab === 'complaints' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#0F4C81]">Complaint Records</h2>
              <button
                onClick={() => setShowComplaintForm(true)}
                className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Record Complaint
              </button>
            </div>
            {/* Search bar for complaints */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search complaints..."
                value={complaintSearch}
                onChange={e => setComplaintSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">Case ID</th>
                    <th className="py-2 px-3 text-left">Complainant</th>
                    <th className="py-2 px-3 text-left">Type</th>
                    <th className="py-2 px-3 text-left">Date</th>
                    <th className="py-2 px-3 text-left">Status</th>
                    <th className="py-2 px-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredComplaints.map(c => (
                    <tr key={c.id} className="border-t">
                      <td className="py-2 px-3 cursor-pointer text-blue-700 hover:underline" onClick={() => setSelectedComplaint(c)}>{c.id}</td>
                      <td className="py-2 px-3">{c.complainant}</td>
                      <td className="py-2 px-3">{c.type}</td>
                      <td className="py-2 px-3">{c.date}</td>
                      <td className="py-2 px-3">{c.status}</td>
                      <td className="py-2 px-3 flex space-x-2">
                        <button className="text-[#0F4C81] hover:text-[#58A1D3]" onClick={() => setEditComplaint(c)}>
                          <Edit2 size={16} />
                        </button>
                        <button className="text-[#0F4C81] hover:text-[#58A1D3]" onClick={() => setSelectedComplaint(c)}>
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredComplaints.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center text-gray-500 py-4">No complaints found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Blotter Report */}
        {activeTab === 'blotter' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#0F4C81]">Blotter Reports</h2>
              <button
                onClick={() => setShowBlotterForm(true)}
                className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Create Blotter Report
              </button>
            </div>
            {/* Search bar for blotters */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search blotter reports..."
                value={blotterSearch}
                onChange={e => setBlotterSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">Entry ID</th>
                    <th className="py-2 px-3 text-left">Involved Parties</th>
                    <th className="py-2 px-3 text-left">Summary</th>
                    <th className="py-2 px-3 text-left">Status</th>
                    <th className="py-2 px-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlotters.map(b => (
                    <tr key={b.id} className="border-t">
                      <td className="py-2 px-3 cursor-pointer text-blue-700 hover:underline" onClick={() => setSelectedBlotter(b)}>{b.id}</td>
                      <td className="py-2 px-3">{b.parties}</td>
                      <td className="py-2 px-3">{b.summary}</td>
                      <td className="py-2 px-3">{b.status}</td>
                      <td className="py-2 px-3 flex space-x-2">
                        <button className="text-[#0F4C81] hover:text-[#58A1D3]" onClick={() => setEditBlotter(b)}>
                          <Edit2 size={16} />
                        </button>
                        <button className="text-[#0F4C81] hover:text-[#58A1D3]" onClick={() => setSelectedBlotter(b)}>
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredBlotters.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center text-gray-500 py-4">No blotter reports found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* My Profile */}
        {activeTab === 'profile' && (
          <section>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#B3DEF8] flex items-center justify-center">
                  <Users className="text-[#0F4C81]" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0F4C81]">{currentUser.name}</h2>
                  <p className="text-[#58A1D3]">{currentUser.role}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Username:</span>
                  <span className="font-semibold text-[#06172E]">{currentUser.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contact:</span>
                  <span className="font-semibold text-[#06172E]">0917-123-4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-[#06172E]">mpablo@upperichon.gov.ph</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Activity Log Page */}
        {activeTab === 'activitylog' && (
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">All Activity Log</h2>
              <button type="button" onClick={() => setActiveTab('dashboard')} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <ul className="space-y-2">
              {activityLog.length === 0 && (
                <li className="text-gray-500">No activity yet.</li>
              )}
              {activityLog.map((log, idx) => (
                <li key={idx} className="flex flex-col border-b py-2">
                  <div className="flex justify-between items-center">
                    <span>
                      <span className="font-semibold">{log.action}</span> ({log.id})
                    </span>
                    <span className="text-xs text-gray-500">
                      {log.time.toLocaleString()} – <span className="font-semibold">{log.status}</span>
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="font-semibold">By:</span> {log.user} &nbsp; 
                    <span className="font-semibold">Remarks:</span> {log.remarks || 'N/A'} &nbsp; 
                    <span className="font-semibold">Action Taken:</span> {log.actionTaken || 'N/A'}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {/* Complaint Modal */}
      {showComplaintForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleComplaintSubmit}
            className="bg-white rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Record Complaint</h2>
              <button type="button" onClick={() => setShowComplaintForm(false)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
           </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Complainant Name</label>
              <input
                type="text"
                required
                value={complaintForm.complainant}
                onChange={e => setComplaintForm({ ...complaintForm, complainant: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Complaint Type</label>
              <input
                type="text"
                required
                value={complaintForm.type}
                onChange={e => setComplaintForm({ ...complaintForm, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date/Time</label>
              <input
                type="datetime-local"
                required
                value={complaintForm.date}
                onChange={e => setComplaintForm({ ...complaintForm, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Narrative</label>
              <textarea
                required
                value={complaintForm.narrative}
                onChange={e => setComplaintForm({ ...complaintForm, narrative: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
                rows={3}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
              <input
                type="text"
                value={complaintForm.remarks}
                onChange={e => setComplaintForm({ ...complaintForm, remarks: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Action Taken</label>
              <input
                type="text"
                value={complaintForm.actionTaken}
                onChange={e => setComplaintForm({ ...complaintForm, actionTaken: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Evidence (optional)</label>
              <input
                type="file"
                onChange={e => setComplaintForm({ ...complaintForm, evidence: e.target.files[0] })}
                className="w-full"
              />
            </div>
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Submit Complaint
            </button>
          </form>
        </div>
      )}

      {/* Edit Complaint Modal */}
      {editComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleComplaintEdit}
            className="bg-white rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Edit Complaint</h2>
              <button type="button" onClick={() => setEditComplaint(null)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Complaint Type</label>
              <input
                type="text"
                required
                value={editComplaint.type}
                onChange={e => setEditComplaint({ ...editComplaint, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={editComplaint.status}
                onChange={e => setEditComplaint({ ...editComplaint, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Narrative</label>
              <textarea
                value={editComplaint.narrative}
                onChange={e => setEditComplaint({ ...editComplaint, narrative: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                rows={3}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
              <input
                type="text"
                value={editComplaint.remarks}
                onChange={e => setEditComplaint({ ...editComplaint, remarks: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Action Taken</label>
              <input
                type="text"
                value={editComplaint.actionTaken}
                onChange={e => setEditComplaint({ ...editComplaint, actionTaken: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Save Changes
            </button>
          </form>
        </div>
      )}

      {/* View Complaint Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Complaint Details</h2>
              <button type="button" onClick={() => setSelectedComplaint(null)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Case ID:</span> {selectedComplaint.id}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Complainant:</span> {selectedComplaint.complainant}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Type:</span> {selectedComplaint.type}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Date:</span> {selectedComplaint.date}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Status:</span> {selectedComplaint.status}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Narrative:</span> {selectedComplaint.narrative}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Remarks:</span> {selectedComplaint.remarks}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Action Taken:</span> {selectedComplaint.actionTaken}
            </div>
          </div>
        </div>
      )}

      {/* Blotter Modal */}
      {showBlotterForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleBlotterSubmit}
            className="bg-white rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Create Blotter Report</h2>
              <button type="button" onClick={() => setShowBlotterForm(false)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Involved Parties</label>
              <input
                type="text"
                required
                value={blotterForm.parties}
                onChange={e => setBlotterForm({ ...blotterForm, parties: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Incident Summary</label>
              <textarea
                required
                value={blotterForm.summary}
                onChange={e => setBlotterForm({ ...blotterForm, summary: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
                rows={3}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={blotterForm.status}
                onChange={e => setBlotterForm({ ...blotterForm, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              >
                <option>Ongoing</option>
                <option>Resolved</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
              <input
                type="text"
                value={blotterForm.remarks}
                onChange={e => setBlotterForm({ ...blotterForm, remarks: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Action Taken</label>
              <input
                type="text"
                value={blotterForm.actionTaken}
                onChange={e => setBlotterForm({ ...blotterForm, actionTaken: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Submit Blotter Report
            </button>
          </form>
        </div>
      )}

      {/* Edit Blotter Modal */}
      {editBlotter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleBlotterEdit}
            className="bg-white rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Edit Blotter Report</h2>
              <button type="button" onClick={() => setEditBlotter(null)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={editBlotter.status}
                onChange={e => setEditBlotter({ ...editBlotter, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option>Ongoing</option>
                <option>Resolved</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
              <textarea
                value={editBlotter.summary}
                onChange={e => setEditBlotter({ ...editBlotter, summary: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                rows={3}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
              <input
                type="text"
                value={editBlotter.remarks}
                onChange={e => setEditBlotter({ ...editBlotter, remarks: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Action Taken</label>
              <input
                type="text"
                value={editBlotter.actionTaken}
                onChange={e => setEditBlotter({ ...editBlotter, actionTaken: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Save Changes
            </button>
          </form>
        </div>
      )}

      {/* View Blotter Modal */}
      {selectedBlotter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Blotter Details</h2>
              <button type="button" onClick={() => setSelectedBlotter(null)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Entry ID:</span> {selectedBlotter.id}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Involved Parties:</span> {selectedBlotter.parties}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Summary:</span> {selectedBlotter.summary}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Status:</span> {selectedBlotter.status}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Remarks:</span> {selectedBlotter.remarks}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Action Taken:</span> {selectedBlotter.actionTaken}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Frame_8;