import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useGlobalContext } from '../../state/context'

export default function Header() {
  const { user } = useGlobalContext();
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
        <NavLink className='option' to='/sign'>
            CART
        </NavLink>
        </div>
    </div>
  )
}
