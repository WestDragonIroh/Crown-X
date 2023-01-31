import React from "react";
// import './checkout.scss'
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout_style";

import { useGlobalContext } from "../../state/global/context";
import CheckoutItem from "../../components/checkout_item/checkout_item";
import StripeButton from "../../components/stripe_button/stripe_button";

export default function Checkout() {
  const { cartItems } = useGlobalContext();
  const total = cartItems.reduce(
    (accumalatedQuantity, cartItems) =>
      accumalatedQuantity + cartItems.quantity * cartItems.price,
    0
  );

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </WarningContainer>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
}
