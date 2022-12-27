import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;