import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import Sign from './pages/sign/sign';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign' element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;