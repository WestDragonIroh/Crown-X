import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;