import React from 'react'
import CustomButton from '../custom_button/custom_button'
import './cart_dropdown.scss'

export default function CartDropdown() {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  )
}