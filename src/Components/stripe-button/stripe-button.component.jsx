import React from 'react';
import StripeCheckout from 'react-stripe-checkout'


const StripeButton = ({price}) => {

    const priceInCents = price * 100;
    const publicKey = 'pk_test_51Ij9JKIfeInIt8q2IuDaIrYgIfitpvKYzu3Sm8m2aQto7kaqVtqnPWt0vgsZSOAgEmu00y9vZpV9Luz35DXNfoXY00Ol4gKGcf';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful !')
    }

    return (
        <StripeCheckout 
            label='Pay Now With Stripe'
            name='CRWN Fashion Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicKey}
        />
    );
};

export default StripeButton;