import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authView, setAuthView] = useState('login'); // 'login' or 'signup'

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  if (!user) {
    return authView === 'login' ? 
      <Login setUser={setUser} switchView={() => setAuthView('signup')} /> :
      <Signup setUser={setUser} switchView={() => setAuthView('login')} />;
  }

  return <Home user={user} />;
}
