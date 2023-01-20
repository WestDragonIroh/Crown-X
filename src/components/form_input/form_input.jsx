import React from "react";
// import './form_input.scss'
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form_input_style";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
}
