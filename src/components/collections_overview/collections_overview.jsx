import React from "react";
import { useGlobalContext } from "../../state/context";
import CollectionPreview from "../collection_preview/collection_preview";
// import './collections_overview.scss'

import { CollectionsOverviewContainer } from "./collections_overview_style";

export default function CollectionsOverview() {
  const { shopData } = useGlobalContext();

  return (
    <CollectionsOverviewContainer>
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}
