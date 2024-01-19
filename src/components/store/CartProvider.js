import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartNumber,updateCartNumber]=useState(0);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    updateCartNumber((cartNumber)=> cartNumber+1);
  };
console.log(items);
  const removeItemFromCart = (itemName) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const updateItemQuantity = (updatedItems) => {
    setItems(updatedItems);
    updateCartNumber((cartNumber)=> cartNumber+1);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
    updateItemQuantity: updateItemQuantity,
    cartNumber:cartNumber
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
