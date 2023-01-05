import React from 'react'
import './cart_icon.scss'

import { ReactComponent as ShoppingIcon }  from '../../assets/bag.svg'
import { useGlobalContext } from '../../state/context'



export default function CartIcon() {

  const { toggleCartHidden } = useGlobalContext()

  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
  )
}
