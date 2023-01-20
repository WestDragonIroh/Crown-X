import React from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../collection_item/collection_item";
// import './collection_preview.scss'

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection_preview_style";

export default function CollectionPreview({ title, items }) {
  const navigate = useNavigate();
  const redir = () => {
    navigate(`${title.toLowerCase()}`);
  };

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={redir}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
