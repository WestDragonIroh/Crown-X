import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with_spinner_style";

export default function WithSpinner(WrappedComponent) {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
}
