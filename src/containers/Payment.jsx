import React, { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext';
import { sumTotal } from '../lib/sumTotal';
import { useNavigate } from "react-router-dom";

import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const currency = 'USD';

  const paypalOtions = {
    //'client-id': 'test',
    'client-id':
      'ATN4MgsCVKSXinkSTL1YqlANTikW5fXyo5C7TkyVUG7JB0DTr1G2aabkWFF9Uz6kKo61tL48cfWpomc4',
    intent: 'capture',
    currency: 'USD',
  };

  const Orden = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: sumTotal(cart, `price`),
          },
        },
      ],
    });
  };

  const buttonStyles = {
    layout: 'vertical',
    color: 'blue',
    label: 'pay',
    shape: 'pill',
  };

  const handlePaymentSuccess = (data) => {
    console.log('Pesque la data:', data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };
  
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${sumTotal(cart, `price`)}`}</h3>
          </div>
        )}
        <div className="Payment-button">
          <PayPalScriptProvider options={paypalOtions}>
            
            <PayPalButtons
              style={buttonStyles}
              disabled={false}
              //forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                return actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: currency,
                          value: sumTotal(cart, `price`),
                        },
                      },
                    ],
                  })
                  .then((orderId) => {
                    // Your code here after create the order
                    console.log('creada la orden');
                    return orderId;
                  });
              }}
              onApprove={function (data, actions) {
                return actions.order.capture().then(function (details) {
                  // Your code here after capture the order
                  console.log('Pagada la orden')
                  handlePaymentSuccess(details)
                });
              }}
              onCancel={(data) => {
                console.log('Cancelada la acción');
              }}
              onError={(err) => {
                console.log('Hubo un error', err);
              }}
            />
            
          </PayPalScriptProvider>
          
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
