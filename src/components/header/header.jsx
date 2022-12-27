import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

export default function Header() {
  return (
    <div className='header'>
        <NavLink className='logo-container' to='/'>
        <Logo className='logo' />
        </NavLink>
        <div className='options'>
        <NavLink className='option' to='/shop'>
            SHOP
        </NavLink>
        <NavLink className='option' to='/shop'>
            CONTACT
        </NavLink>
        <NavLink className='option' to='/sign'>
            SIGN IN
        </NavLink>
        <NavLink className='option' to='/sign'>
            CART
        </NavLink>
        </div>
    </div>
  )
}
