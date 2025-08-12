import React, { useState } from 'react';

const BlotterPage = ({ onSubmit }) => {
  const [blotterForm, setBlotterForm] = useState({
    parties: '',
    summary: '',
    status: 'Ongoing',
    remarks: '',
    actionTaken: ''
  });

  const handleBlotterSubmit = (e) => {
    e.preventDefault();
    // Pass data to parent or handle API call here
    if (onSubmit) {
      onSubmit(blotterForm);
    }
    // Reset form after submission
    setBlotterForm({
      parties: '',
      summary: '',
      status: 'Ongoing',
      remarks: '',
      actionTaken: ''
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[#0F4C81] mb-4">Create Blotter Report</h2>
      <form onSubmit={handleBlotterSubmit}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Involved Parties</label>
          <input
            type="text"
            required
            value={blotterForm.parties}
            onChange={e => setBlotterForm({ ...blotterForm, parties: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Incident Summary</label>
          <textarea
            required
            value={blotterForm.summary}
            onChange={e => setBlotterForm({ ...blotterForm, summary: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            rows={3}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={blotterForm.status}
            onChange={e => setBlotterForm({ ...blotterForm, status: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
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
  );
};