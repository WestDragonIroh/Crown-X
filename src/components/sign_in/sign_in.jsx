import React, { useState } from "react";
// import "./sign_in.scss";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign_in_style";

import {
  auth,
  signInWithGoogle,
  signinWithEmailAndPassword,
} from "../../firebase/firebase.utils";

import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = data;

    try {
      await signinWithEmailAndPassword(auth, email, password);
      setData((preState) => {
        return {
          ...preState,
          email: "",
          password: "",
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={data.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={data.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}
