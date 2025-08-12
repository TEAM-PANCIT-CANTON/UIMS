import React, { useState } from 'react';
import UserList from './UserList';

const initialUsers = [
  { username: 'captain.santos', name: 'Hon. Santos', role: 'Barangay Captain' },
  { username: 'secretary.reyes', name: 'Ms. Reyes', role: 'Barangay Secretary' },
  { username: 'miguelito.pablo', name: 'Hon. Miguelito Pablo', role: 'Councilor' },
];

const ResidentManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState({ username: '', name: '', role: 'Councilor' });
  const [editing, setEditing] = useState(null);

  // Add or update user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing !== null) {
      setUsers(users.map((u, idx) => idx === editing ? form : u));
      setEditing(null);
    } else {
      setUsers([...users, form]);
    }
    setForm({ username: '', name: '', role: 'Councilor' });
    // TODO: Replace with backend API call
  };

  // Delete user
  const handleDelete = (username) => {
    setUsers(users.filter(u => u.username !== username));
    // TODO: Replace with backend API call
  };

  // Edit user
  const handleEdit = (idx) => {
    setEditing(idx);
    setForm(users[idx]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#0F4C81] mb-4">User Management</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            required
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            disabled={editing !== null}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option>Barangay Captain</option>
            <option>Barangay Secretary</option>
            <option>Councilor</option>
          </select>
        </div>
        <button className="bg-[#0F4C81] text-white px-4 py-2 rounded-lg hover:bg-[#58A1D3] transition-colors">
          {editing !== null ? 'Update User' : 'Add User'}
        </button>
        {editing !== null && (
          <button
            type="button"
            className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            onClick={() => {
              setEditing(null);
              setForm({ username: '', name: '', role: 'Councilor' });
            }}
          >
            Cancel
          </button>
        )}
      </form>
      <UserList
        users={users}
        onDelete={handleDelete}
        onEdit={(_, idx) => handleEdit(idx)}
      />
      <div className="text-xs text-gray-400 mt-4">
        * All changes are local. Integrate with your backend for real data.
      </div>
    </div>
  );
};

export default ResidentManagement;