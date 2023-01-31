// import './collection.scss'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection_style";

import React from "react";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection_item/collection_item";
import { useShopContext } from "../../state/shop/context_shop";

// const Collection_ID = {hats: 1, sneakers: 2, jackets: 3, womens: 4, mens: 5};

export default function Collection() {
  let { shopData } = useShopContext();
  const { collectionId } = useParams();
  const collection = shopData ? shopData[collectionId] : null;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItemsContainer className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
}
