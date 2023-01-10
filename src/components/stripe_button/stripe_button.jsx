import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function StripeButton({ price }) {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51MONRWSABq13y645lSMx6YgQe1eHygQYJ3Yn2koQFhYnNro2wFUuQ9gcPIeVmSHH6TvwI3RK9WSNo11mb6HrfjCM00QC4E1bq2';
  
    const onToken = token => {
      console.log(token);
      alert('Payment Succesful!');
    };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}