import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../state/context'
import CartItem from '../cart_item/cart_item'
import CustomButton from '../custom_button/custom_button'
import './cart_dropdown.scss'

export default function CartDropdown() {

  const { cartItems, toggleCartHidden } = useGlobalContext()
  const navigate = useNavigate()

  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        </div>
        <CustomButton onClick={() => {
          navigate('/checkout');
          toggleCartHidden()
        }}> 
          GO TO CHECKOUT
        </CustomButton>
    </div>
  )
}