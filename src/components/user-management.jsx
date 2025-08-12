import React from 'react';

const UserList = ({ users, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-bold text-[#0F4C81] mb-4">User Accounts</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-[#0F4C81]">
            <th className="py-2 px-3 text-left">Username</th>
            <th className="py-2 px-3 text-left">Name</th>
            <th className="py-2 px-3 text-left">Role</th>
            <th className="py-2 px-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username} className="border-t">
              <td className="py-2 px-3">{user.username}</td>
              <td className="py-2 px-3">{user.name}</td>
              <td className="py-2 px-3">{user.role}</td>
              <td className="py-2 px-3">
                <button 
                  className="text-red-600 hover:text-red-800"
                  onClick={() => onDelete(user.username)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center text-gray-500 py-4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;