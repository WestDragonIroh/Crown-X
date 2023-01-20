import React from "react";
// import './cart_item.scss'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart_item_style";

export default function CartItem({
  item: { imageUrl, price, name, quantity },
}) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}
