import React from 'react'
import './cart_icon.scss'

import { ReactComponent as ShoppingIcon }  from '../../assets/bag.svg'
import { useGlobalContext } from '../../state/context'



export default function CartIcon() {

  const { cartItems, toggleCartHidden } = useGlobalContext()
  const itemCount = cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity, 0)
  // console.log(123)

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> {itemCount} </span>
    </div>
  )
}
