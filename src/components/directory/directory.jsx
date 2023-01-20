import React from "react";

// import './directory.scss';
import { DirectoryMenuContainer } from "./directory_style";

import MenuItem from "../menu_item/menu_item";
import { useGlobalContext } from "../../state/context";

const Directory = () => {
  const { sections } = useGlobalContext();

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
