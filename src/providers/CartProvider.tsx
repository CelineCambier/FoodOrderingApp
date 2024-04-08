import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItem] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem["size"]) => {
      // if already in cart, implement quantity

    const newCartItem: CartItem = {
      id: "1", // generate
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItem([newCartItem, ...items]);
  };

  // update quantity

  return (
    <CartContext.Provider value={{ items, addItem: () => {} }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
