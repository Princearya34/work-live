import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import Client from './component/Roles/Client';
import Admin from './component/Roles/Admin';
// import { ClientStatus } from './component/Utility/ClientStatus';
// import './style.css';

function App() {
  const [userType, setUserType] = useState(null);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '0000') {
      setUserType('admin');
    } else if (username === 'client' && password === '1111') {
      setUserType('client');
    } else {
      alert('Invalid credentials');
    }
  };

  return (

      <Routes>
        <Route path="/" element={<Home onLogin={handleLogin} />} />
        {/* <Route path="/clientStatus" element={ClientStatus}/> */}
        <Route path="/client" element={userType === 'client' ? <Client /> : <Navigate to="/" />} />
        <Route path="/admin" element={userType === 'admin' ? <Admin /> : <Navigate to="/" />} />
      </Routes>
   
  );
}

export default App;
