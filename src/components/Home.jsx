import React from 'react';

export default function Home({ user }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.displayName || user.email}</h1>
      <div className="flex flex-col space-y-4">
        <button className="bg-blue-500 px-6 py-3 rounded">Create Room (Coming Soon)</button>
        <button className="bg-green-500 px-6 py-3 rounded">Random Rooms (Coming Soon)</button>
        <button className="bg-yellow-500 px-6 py-3 rounded">Join Room (Coming Soon)</button>
      </div>
    </div>
  );
}
