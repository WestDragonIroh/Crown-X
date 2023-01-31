import React from "react";
import { useShopContext } from "../../state/shop/context_shop";
import CollectionPreview from "../collection_preview/collection_preview";
// import './collections_overview.scss'

import { CollectionsOverviewContainer } from "./collections_overview_style";

export default function CollectionsOverview() {
  let { shopData } = useShopContext();
  shopData = shopData ? Object.keys(shopData).map((key) => shopData[key]) : [];

  return (
    <CollectionsOverviewContainer>
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}
