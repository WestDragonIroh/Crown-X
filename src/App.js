import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import Sign from './pages/sign/sign';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
      console.log(user)
    })
  })

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign' element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;