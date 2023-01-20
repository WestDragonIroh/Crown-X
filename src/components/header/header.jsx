import React from 'react'
import { auth } from '../../firebase/firebase.utils'
// import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useGlobalContext } from '../../state/context'
import CartIcon from '../cart_icon/cart_icon'
import CartDropdown from '../cart_dropdown/cart_dropdown'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header_style'

export default function Header() {
  const { user, hidden } = useGlobalContext();
//   console.log('A   ', user);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink  to='/shop'>
            SHOP
        </OptionLink>
        <OptionLink  to='/shop'>
            CONTACT
        </OptionLink>
        {
            user ?
            <OptionLink onClick={() => auth.signOut()}>
                SIGN OUT
            </OptionLink>
            :
            <OptionLink  to='/sign'>
                SIGN IN
            </OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      { hidden? null : <CartDropdown />}
    </HeaderContainer>
  )
}
