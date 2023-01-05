import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useGlobalContext } from '../../state/context'
import CartIcon from '../cart_icon/cart_icon'
import CartDropdown from '../cart_dropdown/cart_dropdown'

export default function Header() {
  const { user, hidden } = useGlobalContext();
//   console.log('A   ', user);
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
        {
            user ?
            <div className="option" onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
            :
            <NavLink className='option' to='/sign'>
                SIGN IN
            </NavLink>
        }
        <CartIcon />
        </div>
        { hidden? null : <CartDropdown />}
    </div>
  )
}
