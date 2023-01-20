import React from "react";
// import "./custom_button.scss";
import { CustomButtonContainer } from "./custom_button_style";

export default function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
