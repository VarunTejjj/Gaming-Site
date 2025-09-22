import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup({ setUser, switchView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

      // Save user data in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        username,
        nickname,
        email
      });

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} className="mb-2 p-2 rounded text-black"/>
      <input type="text" placeholder="Nickname" value={nickname} onChange={e=>setNickname(e.target.value)} className="mb-2 p-2 rounded text-black"/>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="mb-2 p-2 rounded text-black"/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="mb-2 p-2 rounded text-black"/>
      <button onClick={handleSignup} className="bg-green-500 px-4 py-2 rounded mt-2">Sign Up</button>
      <p className="mt-4 cursor-pointer text-blue-300" onClick={switchView}>Already have account? Login</p>
    </div>
  );
}
