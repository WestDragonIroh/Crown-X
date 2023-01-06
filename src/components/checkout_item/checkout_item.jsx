import React from 'react'
import './checkout_item.scss'

import { useGlobalContext } from '../../state/context'

export default function CheckoutItem({ cartItem }) {

  const { addItem, removeItem, clearItemFromCart } = useGlobalContext();
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={() => removeItem(cartItem)}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={() => addItem(cartItem)}>
            &#10095;
          </div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}
