import React from "react";
import SignIn from "../../components/sign_in/sign_in";
import SignUp from "../../components/sign_up/sign_up";
// import './sign.scss';
import { SignInAndSignUpContainer } from "./sign_style";

export default function Sign() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
}
