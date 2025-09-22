import React from 'react';
import logo from '../assets/logo.png'; // your logo

export default function LoadingScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <img src={logo} alt="Logo" className="w-32 h-32 mb-4 animate-bounce"/>
      <p className="text-white text-xl font-bold">Loading...</p>
    </div>
  );
}
