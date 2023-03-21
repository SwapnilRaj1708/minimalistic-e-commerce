import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
