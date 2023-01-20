import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../state/context";
import CartItem from "../cart_item/cart_item";
// import CustomButton from "../custom_button/custom_button";
// import './cart_dropdown.scss'

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart_dropdown_style";

export default function CartDropdown() {
  const { cartItems, toggleCartHidden } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("/checkout");
          toggleCartHidden();
        }}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
}
