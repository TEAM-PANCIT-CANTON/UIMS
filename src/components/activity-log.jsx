import React from 'react';

const ActivityLogPage = ({ activityLog }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
    <h2 className="text-xl font-bold text-[#0F4C81] mb-4">All Activity Log</h2>
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
);

export default ActivityLogPage;