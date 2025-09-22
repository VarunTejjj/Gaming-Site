import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ setUser, switchView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="mb-2 p-2 rounded text-black"/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="mb-2 p-2 rounded text-black"/>
      <button onClick={handleLogin} className="bg-blue-500 px-4 py-2 rounded mt-2">Login</button>
      <p className="mt-4 cursor-pointer text-blue-300" onClick={switchView}>Don't have account? Sign up</p>
    </div>
  );
}
