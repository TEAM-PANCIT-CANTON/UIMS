import React, { useState } from 'react';
import { Menu, X, Users, HeartPulse, FileText, ClipboardPlus, User, Activity, LogOut } from 'lucide-react';

const bhwUser = {
  name: "Miguelito Pablo",
  role: "Barangay Health Worker",
};

const navItems = [
  { name: 'Manage Residents', key: 'residents', icon: Users },
  { name: 'Health Records', key: 'health', icon: HeartPulse },
  { name: 'Medical Referral', key: 'referral', icon: ClipboardPlus },
  { name: 'Generate Reports', key: 'reports', icon: FileText },
  { name: 'My Profile', key: 'profile', icon: User },
];

// Sample data
const initialResidents = [
  { id: 'R-0001', name: 'Juan Dela Cruz', age: 45, address: 'Purok 1', healthStatus: 'Good' },
  { id: 'R-0002', name: 'Maria Santos', age: 32, address: 'Purok 2', healthStatus: 'Hypertensive' },
];

const initialHealthRecords = [
  { id: 'HR-001', patient: 'Juan Dela Cruz', condition: 'Regular Checkup', date: '2025-07-25', status: 'Completed' },
  { id: 'HR-002', patient: 'Maria Santos', condition: 'Hypertension Monitoring', date: '2025-07-20', status: 'Ongoing' },
];

const initialReferrals = [
  { id: 'REF-001', patient: 'Pedro Reyes', facility: 'Provincial Hospital', reason: 'X-Ray', status: 'Pending' },
];

const BhwDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showResidentForm, setShowResidentForm] = useState(false);
  const [showHealthRecordForm, setShowHealthRecordForm] = useState(false);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [residents, setResidents] = useState(initialResidents);
  const [healthRecords, setHealthRecords] = useState(initialHealthRecords);
  const [referrals, setReferrals] = useState(initialReferrals);
  const [activityLog, setActivityLog] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  // Form states
  const [residentForm, setResidentForm] = useState({
    name: '', age: '', address: '', contact: '', healthStatus: 'Good',
  });
  const [healthRecordForm, setHealthRecordForm] = useState({
    patient: '', condition: '', date: '', notes: '', status: 'Ongoing',
  });
  const [referralForm, setReferralForm] = useState({
    patient: '', facility: '', reason: '', date: '', status: 'Pending',
  });

  const handleResidentSubmit = (e) => {
    e.preventDefault();
    const newId = `R-${String(residents.length + 1).padStart(4, '0')}`;
    setResidents([...residents, { id: newId, ...residentForm }]);
    setActivityLog([
      { action: 'Resident registered', id: newId, time: new Date(), status: 'Success' },
      ...activityLog,
    ]);
    setConfirmation(`Resident successfully registered. ID: ${newId}`);
    setShowResidentForm(false);
    setResidentForm({ name: '', age: '', address: '', contact: '', healthStatus: 'Good' });
  };

  const handleHealthRecordSubmit = (e) => {
    e.preventDefault();
    const newId = `HR-${String(healthRecords.length + 1).padStart(3, '0')}`;
    setHealthRecords([...healthRecords, { id: newId, ...healthRecordForm }]);
    setActivityLog([
      { action: 'Health record created', id: newId, time: new Date(), status: 'Success' },
      ...activityLog,
    ]);
    setConfirmation(`Health record created. Record ID: ${newId}`);
    setShowHealthRecordForm(false);
    setHealthRecordForm({ patient: '', condition: '', date: '', notes: '', status: 'Ongoing' });
  };

  const handleReferralSubmit = (e) => {
    e.preventDefault();
    const newId = `REF-${String(referrals.length + 1).padStart(3, '0')}`;
    setReferrals([...referrals, { id: newId, ...referralForm }]);
    setActivityLog([
      { action: 'Medical referral created', id: newId, time: new Date(), status: 'Success' },
      ...activityLog,
    ]);
    setConfirmation(`Medical referral created. Reference ID: ${newId}`);
    setShowReferralForm(false);
    setReferralForm({ patient: '', facility: '', reason: '', date: '', status: 'Pending' });
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
                <p className="text-sm" style={{ color: '#58A1D3' }}>BHW Dashboard</p>
              </div>
            </div>
            {/* User */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#B3DEF8] flex items-center justify-center">
                <HeartPulse className="text-[#0F4C81]" size={22} />
              </div>
              <div>
                <span className="block font-semibold text-[#0F4C81]">{bhwUser.name}</span>
                <span className="block text-xs text-[#58A1D3]">{bhwUser.role}</span>
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
              <LogOut size={16} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <Users className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Residents</h3>
              <span className="text-3xl font-bold text-[#06172E]">{residents.length}</span>
              <button
                onClick={() => setShowResidentForm(true)}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Add Resident
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <HeartPulse className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Health Records</h3>
              <span className="text-3xl font-bold text-[#06172E]">{healthRecords.length}</span>
              <button
                onClick={() => setShowHealthRecordForm(true)}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Add Record
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <ClipboardPlus className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Referrals</h3>
              <span className="text-3xl font-bold text-[#06172E]">{referrals.length}</span>
              <button
                onClick={() => setShowReferralForm(true)}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Create Referral
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <FileText className="text-[#0F4C81]" size={32} />
              <h3 className="mt-2 text-lg font-bold text-[#0F4C81]">Reports</h3>
              <span className="text-3xl font-bold text-[#06172E]">5</span>
              <button
                onClick={() => setActiveTab('reports')}
                className="mt-4 bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Generate Report
              </button>
            </div>
          </div>
        )}

        {/* Manage Residents */}
        {activeTab === 'residents' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#0F4C81]">Manage Residents</h2>
              <button
                onClick={() => setShowResidentForm(true)}
                className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Add Resident
              </button>
            </div>
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">ID</th>
                    <th className="py-2 px-3 text-left">Name</th>
                    <th className="py-2 px-3 text-left">Age</th>
                    <th className="py-2 px-3 text-left">Address</th>
                    <th className="py-2 px-3 text-left">Health Status</th>
                  </tr>
                </thead>
                <tbody>
                  {residents.map(r => (
                    <tr key={r.id} className="border-t">
                      <td className="py-2 px-3">{r.id}</td>
                      <td className="py-2 px-3">{r.name}</td>
                      <td className="py-2 px-3">{r.age}</td>
                      <td className="py-2 px-3">{r.address}</td>
                      <td className="py-2 px-3">{r.healthStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Health Records */}
        {activeTab === 'health' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#0F4C81]">Health Records</h2>
              <button
                onClick={() => setShowHealthRecordForm(true)}
                className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Add Health Record
              </button>
            </div>
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">Record ID</th>
                    <th className="py-2 px-3 text-left">Patient</th>
                    <th className="py-2 px-3 text-left">Condition</th>
                    <th className="py-2 px-3 text-left">Date</th>
                    <th className="py-2 px-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {healthRecords.map(hr => (
                    <tr key={hr.id} className="border-t">
                      <td className="py-2 px-3">{hr.id}</td>
                      <td className="py-2 px-3">{hr.patient}</td>
                      <td className="py-2 px-3">{hr.condition}</td>
                      <td className="py-2 px-3">{hr.date}</td>
                      <td className="py-2 px-3">{hr.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Medical Referral */}
        {activeTab === 'referral' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#0F4C81]">Medical Referrals</h2>
              <button
                onClick={() => setShowReferralForm(true)}
                className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors"
              >
                Create Referral
              </button>
            </div>
            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#0F4C81]">
                    <th className="py-2 px-3 text-left">Referral ID</th>
                    <th className="py-2 px-3 text-left">Patient</th>
                    <th className="py-2 px-3 text-left">Facility</th>
                    <th className="py-2 px-3 text-left">Reason</th>
                    <th className="py-2 px-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map(ref => (
                    <tr key={ref.id} className="border-t">
                      <td className="py-2 px-3">{ref.id}</td>
                      <td className="py-2 px-3">{ref.patient}</td>
                      <td className="py-2 px-3">{ref.facility}</td>
                      <td className="py-2 px-3">{ref.reason}</td>
                      <td className="py-2 px-3">{ref.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Generate Reports */}
        {activeTab === 'reports' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#0F4C81]">Generate Reports</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-[#0F4C81] mb-4">Health Summary Report</h3>
                <p className="text-gray-600 mb-4">Generate a comprehensive health summary for all residents.</p>
                <button className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors">
                  Generate Report
                </button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-[#0F4C81] mb-4">Monthly Activity Report</h3>
                <p className="text-gray-600 mb-4">Generate monthly activity and statistics report.</p>
                <button className="bg-[#58A1D3] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C81] transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </section>
        )}

        {/* My Profile */}
        {activeTab === 'profile' && (
          <section>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#B3DEF8] flex items-center justify-center">
                  <HeartPulse className="text-[#0F4C81]" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0F4C81]">{bhwUser.name}</h2>
                  <p className="text-[#58A1D3]">{bhwUser.role}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Username:</span>
                  <span className="font-semibold text-[#06172E]">miguelito.pablo.bhw</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contact:</span>
                  <span className="font-semibold text-[#06172E]">0917-123-4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-[#06172E]">mpablo.bhw@upperichon.gov.ph</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Department:</span>
                  <span className="font-semibold text-[#06172E]">Health Services</span>
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

      {/* Resident Modal */}
      {showResidentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleResidentSubmit}
            className="bg-white rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Add Resident</h2>
              <button type="button" onClick={() => setShowResidentForm(false)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={residentForm.name}
                onChange={e => setResidentForm({ ...residentForm, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                required
                value={residentForm.age}
                onChange={e => setResidentForm({ ...residentForm, age: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                required
                value={residentForm.address}
                onChange={e => setResidentForm({ ...residentForm, address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <input
                type="text"
                value={residentForm.contact}
                onChange={e => setResidentForm({ ...residentForm, contact: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Health Status</label>
              <select
                value={residentForm.healthStatus}
                onChange={e => setResidentForm({ ...residentForm, healthStatus: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              >
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
                <option>Hypertensive</option>
                <option>Diabetic</option>
                <option>Other</option>
              </select>
            </div>
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Add Resident
            </button>
          </form>
        </div>
      )}

      {/* Health Record Modal */}
      {showHealthRecordForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleHealthRecordSubmit}
            className="bg-white rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Add Health Record</h2>
              <button type="button" onClick={() => setShowHealthRecordForm(false)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
              <input
                type="text"
                required
                value={healthRecordForm.patient}
                onChange={e => setHealthRecordForm({ ...healthRecordForm, patient: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Condition/Service</label>
              <input
                type="text"
                required
                value={healthRecordForm.condition}
                onChange={e => setHealthRecordForm({ ...healthRecordForm, condition: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                required
                value={healthRecordForm.date}
                onChange={e => setHealthRecordForm({ ...healthRecordForm, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                value={healthRecordForm.notes}
                onChange={e => setHealthRecordForm({ ...healthRecordForm, notes: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
                rows={3}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={healthRecordForm.status}
                onChange={e => setHealthRecordForm({ ...healthRecordForm, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              >
                <option>Ongoing</option>
                <option>Completed</option>
                <option>Follow-up Required</option>
              </select>
            </div>
                        <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Add Health Record
            </button>
          </form>
        </div>
      )}

      {/* Referral Modal */}
      {showReferralForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleReferralSubmit}
            className="bg-white rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0F4C81]">Create Medical Referral</h2>
              <button type="button" onClick={() => setShowReferralForm(false)} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
              <input
                type="text"
                required
                value={referralForm.patient}
                onChange={e => setReferralForm({ ...referralForm, patient: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Facility</label>
              <input
                type="text"
                required
                value={referralForm.facility}
                onChange={e => setReferralForm({ ...referralForm, facility: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Referral</label>
              <input
                type="text"
                required
                value={referralForm.reason}
                onChange={e => setReferralForm({ ...referralForm, reason: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                required
                value={referralForm.date}
                onChange={e => setReferralForm({ ...referralForm, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={referralForm.status}
                onChange={e => setReferralForm({ ...referralForm, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58A1D3]"
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
            <button className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-[#58A1D3] transition-colors">
              Create Referral
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BhwDashboard;
