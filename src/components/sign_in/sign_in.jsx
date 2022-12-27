import React, { useState } from "react";
import "./sign_in.scss";

import FormInput from '../form_input/form_input'
import CustomButton from '../custom_button/custom_button'



export default function SignIn() {
  
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((preState) => {
        return {
            ...preState, email:'',password:'',
        }
    })
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setData((preState) => {
        return {
            ...preState, [name]: value,
        }
    })
  }



  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
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
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
}
