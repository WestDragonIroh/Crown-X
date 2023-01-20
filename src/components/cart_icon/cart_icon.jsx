import React from "react";
// import "./cart_icon.scss";

// import { ReactComponent as ShoppingIcon }  from '../../assets/bag.svg'
import { useGlobalContext } from "../../state/context";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart_icon_style";

export default function CartIcon() {
  const { cartItems, toggleCartHidden } = useGlobalContext();
  const itemCount = cartItems.reduce(
    (accumalatedQuantity, cartItems) =>
      accumalatedQuantity + cartItems.quantity,
    0
  );
  // console.log(123)

  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer> {itemCount} </ItemCountContainer>
    </CartContainer>
  );
}
