import {children, createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [carts, setCarts] = useState([1, 2, 3, 4]);
  const addToCart = item => {
    const itemExist = carts.findIndex(carts => carts.id === item.id);
    if (itemExist === -1) {
      setCarts([...carts, item]);
    }
  };
  const value = {
    carts,
    addToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
