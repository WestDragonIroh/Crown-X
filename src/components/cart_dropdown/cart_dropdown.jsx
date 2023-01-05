import React from 'react'
import { useGlobalContext } from '../../state/context'
import CartItem from '../cart_item/cart_item'
import CustomButton from '../custom_button/custom_button'
import './cart_dropdown.scss'

export default function CartDropdown() {

  const { cartItems } = useGlobalContext()

  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
          }
        </div>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  )
}