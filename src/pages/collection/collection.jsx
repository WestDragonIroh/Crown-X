import './collection.scss'
import React from 'react'
import { useParams } from 'react-router-dom'
import CollectionItem from '../../components/collection_item/collection_item';
import { useGlobalContext } from '../../state/context';

const Collection_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

export default function Collection() {

  const { shopData } = useGlobalContext()
  const { collectionId } = useParams();
  const collection = shopData.find(
    data => data.id === Collection_ID[collectionId]
  )

  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
