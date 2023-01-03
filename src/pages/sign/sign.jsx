import React from 'react';
import SignIn from '../../components/sign_in/sign_in';
import SignUp from '../../components/sign_up/sign_up';
import './sign.scss';

export default function Sign() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}
