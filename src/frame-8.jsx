//  huy inig naa na gani api or naa nata backend ang pulihan ra is kang {useState} sa name sa  ato api bitch, nganong nag IT mn ko uy !!!
import React, { useState } from 'react';
import { Menu, X, Users, FileText, ShieldAlert, ClipboardList, User, Activity, LogIn } from 'lucide-react';

const councilor = {
  name: "Hon. Miguelito Pablo",
  role: "Barangay Councilor Member",
};

const navItems = [
  { name: 'Complaint Records', key: 'complaints', icon: FileText },
  { name: 'Blotter Report', key: 'blotter', icon: ShieldAlert },
  { name: 'Concerns List', key: 'concerns', icon: ClipboardList },
  { name: 'My Profile', key: 'profile', icon: User },
];

const initialComplaints = [
  { id: 'C-0457', complainant: 'Juan Dela Cruz', type: 'Noise', date: '2025-07-18', status: 'Resolved' },
];
const initialBlotters = [
  { id: 'B-1281', parties: 'Pedro Santos vs. Mario Reyes', summary: 'Physical altercation', status: 'Ongoing' },
];
const initialConcerns = [
  { id: 'CN-1001', concern: 'Street light not working', status: 'Pending' },
];

const Frame_8 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [showBlotterForm, setShowBlotterForm] = useState(false);
  const [complaints, setComplaints] = useState(initialComplaints);
  const [blotters, setBlotters] = useState(initialBlotters);
  const [concerns, setConcerns] = useState(initialConcerns);
  const [activityLog, setActivityLog] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  // Complaint form state
  const [complaintForm, setComplaintForm] = useState({
    complainant: '', type: '', date: '', narrative: '', evidence: null,
  });
  // Blotter form state
  const [blotterForm, setBlotterForm] = useState({
    parties: '', summary: '', status: 'Ongoing',
  });

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    const newId = `C-${Math.floor(1000 + Math.random() * 9000)}`;
    setComplaints([...complaints, { id: newId, ...complaintForm, status: 'Pending' }]);
    setActivityLog([
      { action: 'Complaint recorded', id: newId, time: new Date(), status: 'Success' },
      ...activityLog,
    ]);
    setConfirmation(`Complaint successfully recorded. Case ID: ${newId}`);
    setShowComplaintForm(false);
    setComplaintForm({ complainant: '', type: '', date: '', narrative: '', evidence: null });
  };

  const handleBlotterSubmit = (e) => {
    e.preventDefault();
    const newId = `B-${Math.floor(1000 + Math.random() * 9000)}`;
    setBlotters([...blotters, { id: newId, ...blotterForm }]);
    setActivityLog([
      { action: 'Blotter report saved', id: newId, time: new Date(), status: 'Success' },
      ...activityLog,
    ]);
    setConfirmation(`Blotter report saved. Entry ID: ${newId}`);
    setShowBlotterForm(false);
    setBlotterForm({ parties: '', summary: '', status: 'Ongoing' });
  };

  const handleConcernStatusUpdate = (id, status) => {
    setConcerns(concerns.map(c => c.id === id ? { ...c, status } : c));
    setActivityLog([
      { action: 'Concern status updated', id, time: new Date(), status },
      ...activityLog,
    ]);
    setConfirmation(`Concern ${id} status updated to ${status}.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3DEF8] to-[#58A1D3]">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0F4C81] to-[#58A1D3] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">UI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: '#0F4C81' }}>Upper Ichon</h1>
                <p className="text-sm" style={{ color: '#58A1D3' }}>Councilor Dashboard</p>
              </div>
            </div>
            {/* User */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#B3DEF8] flex items-center justify-center">
                <Users className="text-[#0F4C81]" size={22} />
              </div>
              <div>
                <span className="block font-semibold text-[#0F4C81]">{councilor.name}</span>
                <span className="block text-xs text-[#58A1D3]">{councilor.role}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <FileText className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Complaints</h3>
              <span className="text-3xl font-bold text-[#06172E]">{complaints.length}</span>
              <button
                onClick={() => setShowComplaintForm(true)}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Record Complaint
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <ShieldAlert className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Blotter Reports</h3>
              <span className="text-3xl font-bold text-[#06172E]">{blotters.length}</span>
              <button
                onClick={() => setShowBlotterForm(true)}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Create Blotter Report
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <ClipboardList className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Concerns</h3>
              <span className="text-3xl font-bold text-[#06172E]">{concerns.length}</span>
              <button
                onClick={() => setActiveTab('concerns')}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                View Concerns List
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
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">Case ID</th>
                    <th className="py-2 px-3 text-left">Complainant</th>
                    <th className="py-2 px-3 text-left">Type</th>
                    <th className="py-2 px-3 text-left">Date</th>
                    <th className="py-2 px-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map(c => (
                    <tr key={c.id} className="border-t">
                      <td className="py-2 px-3">{c.id}</td>
                      <td className="py-2 px-3">{c.complainant}</td>
                      <td className="py-2 px-3">{c.type}</td>
                      <td className="py-2 px-3">{c.date}</td>
                      <td className="py-2 px-3">{c.status}</td>
                    </tr>
                  ))}
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
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">Entry ID</th>
                    <th className="py-2 px-3 text-left">Involved Parties</th>
                    <th className="py-2 px-3 text-left">Summary</th>
                    <th className="py-2 px-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {blotters.map(b => (
                    <tr key={b.id} className="border-t">
                      <td className="py-2 px-3">{b.id}</td>
                      <td className="py-2 px-3">{b.parties}</td>
                      <td className="py-2 px-3">{b.summary}</td>
                      <td className="py-2 px-3">{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Concerns List */}
        {activeTab === 'concerns' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#0F4C81]">Concerns List</h2>
            </div>
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">Concern ID</th>
                    <th className="py-2 px-3 text-left">Concern</th>
                    <th className="py-2 px-3 text-left">Status</th>
                    <th className="py-2 px-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {concerns.map(c => (
                    <tr key={c.id} className="border-t">
                      <td className="py-2 px-3">{c.id}</td>
                      <td className="py-2 px-3">{c.concern}</td>
                      <td className="py-2 px-3">{c.status}</td>
                      <td className="py-2 px-3">
                        <select
                          value={c.status}
                          onChange={e => handleConcernStatusUpdate(c.id, e.target.value)}
                          className="border rounded px-2 py-1"
                        >
                          <option>Pending</option>
                          <option>In Progress</option>
                          <option>Resolved</option>
                        </select>
                      </td>
                    </tr>
                  ))}
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
                  <h2 className="text-2xl font-bold text-[#0F4C81]">{councilor.name}</h2>
                  <p className="text-[#58A1D3]">{councilor.role}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Username:</span>
                  <span className="font-semibold text-[#06172E]">miguelito.pablo</span>
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

        {/* Activity Log */}
        <section className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="text-[#0F4C81]" size={22} />
              <h3 className="text-xl font-bold text-[#0F4C81]">Activity Log</h3>
            </div>
            <ul className="space-y-2">
              {activityLog.length === 0 && (
                <li className="text-gray-500">No recent activity.</li>
              )}
              {activityLog.map((log, idx) => (
                <li key={idx} className="flex items-center justify-between border-b py-2">
                  <span>
                    <span className="font-semibold">{log.action}</span> ({log.id})
                  </span>
                  <span className="text-xs text-gray-500">
                    {log.time.toLocaleString()} – <span className="font-semibold">{log.status}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
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
            <div className="mb-4">
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
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Submit Blotter Report
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Frame_8;
