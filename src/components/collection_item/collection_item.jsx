import React from 'react'
import { useGlobalContext } from '../../state/context';
import CustomButton from '../custom_button/custom_button'
import './collection_item.scss'

export default function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const { addItem } = useGlobalContext()

  return (
    <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem(item)} >
          Add to cart
        </CustomButton>
    </div>
  )
}
