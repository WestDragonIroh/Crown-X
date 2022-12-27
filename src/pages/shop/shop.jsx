import React from 'react';
import CollectionPreview from '../../components/collection_preview/collection_preview';
import shopData from './shopData'

export default function Shop() {
  return (
    <div className="shop-page">
      {shopData.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key ={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}
