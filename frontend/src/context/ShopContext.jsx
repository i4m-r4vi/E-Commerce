import React, { createContext } from 'react'
import {products} from '../assets/assets'

export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
  const currency = '₹';
  const delivery_fee = 10;

  const value1 = {
    products,currency,delivery_fee
  }
  return (
    <ShopContext.Provider value={value1}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider