import React from "react";
import { useGlobalContext } from "../../state/context";
// import CustomButton from "../custom_button/custom_button";
// import './collection_item.scss'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection_item_style";

export default function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const { addItem } = useGlobalContext();

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}
