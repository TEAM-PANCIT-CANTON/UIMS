import React from 'react';

const ComplaintsPage = ({ complaints, onEdit, onView, search, setSearch }) => (
  <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search complaints..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
    </div>
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
        {complaints.length === 0 ? (
          <tr>
            <td colSpan={6} className="text-center text-gray-500 py-4">No complaints found.</td>
          </tr>
        ) : complaints.map(c => (
          <tr key={c.id} className="border-t">
            <td className="py-2 px-3 cursor-pointer text-blue-700 hover:underline" onClick={() => onView(c)}>{c.id}</td>
            <td className="py-2 px-3">{c.complainant}</td>
            <td className="py-2 px-3">{c.type}</td>
            <td className="py-2 px-3">{c.date}</td>
            <td className="py-2 px-3">{c.status}</td>
            <td className="py-2 px-3 flex space-x-2">
              <button className="text-[#0F4C81] hover:text-[#58A1D3]" onClick={() => onEdit(c)}>
                Edit
              </button>
              <button className="text-[#0F4C81] hover:text-[#58A1D3]" onClick={() => onView(c)}>
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComplaintsPage;