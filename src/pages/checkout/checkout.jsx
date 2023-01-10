import React from 'react'
import './checkout.scss'

import { useGlobalContext } from '../../state/context'
import CheckoutItem from '../../components/checkout_item/checkout_item'
import StripeButton from '../../components/stripe_button/stripe_button'

export default function Checkout() {

  const { cartItems } = useGlobalContext()
  const total = cartItems.reduce((accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity * cartItems.price, 0)

  return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
        </div>
        <StripeButton price={total} />
    </div>
  )
}