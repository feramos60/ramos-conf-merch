import { useEffect, useState } from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = 'http://localhost:1337/api/products?populate=%2A'

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

      
  useEffect(() => {
      async function prod() {
          const response = await axios(API);
          setProducts(response.data.data);
      }
      prod();
  }, []);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.uid !== payload.attributes.uid),
    });
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }
  
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state,
  };
};

export default useInitialState;