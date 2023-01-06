import React from 'react'
import { useGlobalContext } from '../../state/context'
import CollectionPreview from '../collection_preview/collection_preview'
import './collections_overview.scss'

export default function CollectionsOverview() {

  const { shopData } = useGlobalContext()

  return (
    <div className='collections-overview'>
        {shopData.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  )
}
