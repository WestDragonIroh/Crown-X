import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collections_overview/collections_overview';
import Collection from '../collection/collection';

export default function Shop() {
  return (
    <div className="shop-page">
      <Routes>
        <Route path='/' element={<CollectionsOverview />} />
        <Route path='/:collectionId' element={<Collection />} />
      </Routes>
    </div>
  )
}