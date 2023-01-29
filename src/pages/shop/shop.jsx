import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  collecTion,
  convertCollectionsSnapshotToMap,
  firestore,
  onsnapshot,
} from "../../firebase/firebase.utils";
import CollectionsOverview from "../../components/collections_overview/collections_overview";
import Collection from "../collection/collection";
import { useGlobalContext } from "../../state/context";

export default function Shop() {
  const { updateShopData } = useGlobalContext();

  useEffect(() => {
    const collectionRef = collecTion(firestore, "shopData");
    onsnapshot(collectionRef, async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateShopData(collectionsMap);
    });
  }, [updateShopData]);

  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/:collectionId" element={<Collection />} />
      </Routes>
    </div>
  );
}
