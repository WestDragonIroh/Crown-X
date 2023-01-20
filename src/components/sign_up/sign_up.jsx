import React, { useState } from "react";
// import './sign_up.scss'
import { SignUpContainer, SignUpTitle } from "./sign_up_style";

import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";
import {
  auth,
  createUserProfileDocument,
  createuserWithEmailAndPassword,
} from "../../firebase/firebase.utils";

export default function SignUp() {
  const [data, setData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createuserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // .then((response) => console.log('Response ',response))
      // .catch((error) => console.log('Error ', error.message))
      await createUserProfileDocument(user, { displayName });
      setData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error();
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
    <SignUpContainer>
      <SignUpTitle className="title">I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={data.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
}
