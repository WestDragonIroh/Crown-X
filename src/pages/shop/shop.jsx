import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  collecTion,
  convertCollectionsSnapshotToMap,
  firestore,
  onsnapshot,
} from "../../firebase/firebase.utils";
import CollectionsOverview from "../../components/collections_overview/collections_overview";
import Collection from "../collection/collection";
import { useShopContext } from "../../state/shop/context_shop";
import WithSpinner from "../../components/with_spinner/with_spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const { updateShopData } = useShopContext();

  useEffect(() => {
    const collectionRef = collecTion(firestore, "shopData");
    onsnapshot(collectionRef, async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateShopData(collectionsMap);
      setLoading(false);
    });
  }, [updateShopData, loading]);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={<CollectionsOverviewWithSpinner isLoading={loading} />}
        />
        <Route
          path="/:collectionId"
          element={<CollectionWithSpinner isLoading={loading} />}
        />
      </Routes>
    </div>
  );
}
