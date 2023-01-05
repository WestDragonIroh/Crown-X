import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth, createUserProfileDocument, onsnapshot } from './firebase/firebase.utils';

import './App.css';

import { useGlobalContext } from './state/context';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import Sign from './pages/sign/sign';

function App() {

  // const [user, setUser] = useState(null)
  const { user, setUser } = useGlobalContext();

  useEffect(() => {
    // console.log('A')
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onsnapshot(userRef, (snapShot) => {
          setUser({id: snapShot.id, ...snapShot.data()})
        })
      }
      else {
        setUser(userAuth)
      }
    })
  },[setUser])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign'  element={user ? <Navigate to='/' /> : <Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;